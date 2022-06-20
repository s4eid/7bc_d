import React, { useState, useRef } from "react";
import login from "./login.module.css";
import { initialValues, loginSchema } from "../../validation/login";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_ADMIN } from "../../graphql_f/admin/Mutation/loginAdmin";
import { getAdminInfo } from "../../Redux/Actions/Admin/admin";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const reRef = useRef();
  const router = useRouter();
  const [loginAdmin, { data, loading, error }] = useMutation(LOGIN_ADMIN);
  const [errorMessage, setErrorMessage] = useState("");
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
            const token = await reRef.current.executeAsync();
            reRef.current.reset();
            data.email = data.email.toLowerCase();
            loginAdmin({
              variables: {
                email: data.email,
                password: data.password,
                token: token,
              },
              onError: (err) => setErrorMessage(err.message),
              onCompleted: () => {
                dispatch(getAdminInfo());
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form className={login.fields}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                size="invisible"
                ref={reRef}
                className={login.reCaptcha}
              />
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
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
