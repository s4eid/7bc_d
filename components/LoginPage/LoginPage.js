import React from "react";
import login from "login.module.css";
import { Formik, Field, Form } from "formik";

export default function LoginPage() {
  return (
    <div className={login.mainContainer}>
      {error ? (
        <div className={login.errorMessage}>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <></>
      )}
      <div className={login.title}>
        <h1>Login</h1>
      </div>
      <div className={login.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={async (data) => {
            data.email = await data.email.toLowerCase();
            loginUser({
              variables: {
                email: data.email,
                password: data.password,
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: () => {
                dispatch(getUserInfo());
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={login.fields}>
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={login.fieldE}
                    enterKeyHint="next"
                    required
                  />
                  {errors.email && touched.email ? (
                    <div className={login.error}>
                      <p>{errors.email}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Email</p>
                    </div>
                  )}
                </div>
              </div>
              <div className={login.inputsContainer}>
                <div className={login.holder}>
                  <Field
                    type={showPassword ? "text" : "password"}
                    placeholder={"password"}
                    className={login.field}
                    name="password"
                    enterKeyHint="next"
                    required
                  />
                  {errors.password && touched.password ? (
                    <div className={login.error}>
                      <p>{errors.password}</p>
                    </div>
                  ) : (
                    <div className={login.errorC}>
                      <p>Plaese Enter Your Password</p>
                    </div>
                  )}
                  {!showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      onClick={() => setShowPassword(!showPassword)}
                      className={login.eyeIconO}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      onClick={() => setShowPassword(!showPassword)}
                      className={login.eyeIconO}
                    />
                  )}
                </div>
              </div>

              <div className={login.loginOr}>
                {!loading ? (
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={!isValid ? login.loginBtnD : login.loginBtn}
                  >
                    Login
                  </button>
                ) : (
                  <button disabled={true} className={login.button}>
                    <span className={login.buttonLoading}> </span>
                  </button>
                )}
                <div
                  type="button"
                  onClick={() => router.push("/register")}
                  className={login.orRegister}
                >
                  Have no account?
                </div>
                <div
                  type="button"
                  onClick={() => router.push("/change_password")}
                  className={login.resetPass}
                >
                  Forgot Your Password?
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
