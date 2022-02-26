import React from "react";
import {
  addProductSchema,
  initialValues,
} from "../../../../validation/addProduct";
import { Formik, Field, Form } from "formik";
import editCForm from "./EditCForm.module.css";

export default function EditCForm() {
  return (
    <div className={editCForm.mainContainer}>
      <div className={editCForm.title}>
        <p>Edit Product </p>
      </div>
      <div className={editCForm.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={addProductSchema}
          onSubmit={async (data) => {
            console.log(data);
          }}
        >
          {({ errors, touched, isValid, dirty, setFieldValue }) => (
            <Form className={editCForm.fields}>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.name && touched.name ? (
                    <label className={editCForm.error}>{errors.name}</label>
                  ) : (
                    <label className={editCForm.errorC}>Product name</label>
                  )}
                  <Field
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={editCForm.fieldE}
                    enterKeyHint="next"
                    required
                  />
                </div>
                <div className={editCForm.holder}>
                  {errors.stock && touched.stock ? (
                    <div className={editCForm.error}>
                      <p>{errors.stock}</p>
                    </div>
                  ) : (
                    <div className={editCForm.errorC}>
                      <p>Stock</p>
                    </div>
                  )}
                  <Field
                    placeholder={"Stock"}
                    className={editCForm.field}
                    name="stock"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.height && touched.height ? (
                    <div className={editCForm.error}>
                      <p>{errors.height}</p>
                    </div>
                  ) : (
                    <div className={editCForm.errorC}>
                      <p>H</p>
                    </div>
                  )}
                  <Field
                    placeholder={"Height"}
                    className={editCForm.field}
                    name="height"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
                <div className={editCForm.holder}>
                  {errors.width && touched.width ? (
                    <div className={editCForm.error}>
                      <p>{errors.width}</p>
                    </div>
                  ) : (
                    <div className={editCForm.errorC}>
                      <p>W</p>
                    </div>
                  )}
                  <Field
                    name="width"
                    placeholder="Width"
                    className={editCForm.fieldE}
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.origin && touched.origin ? (
                    <label className={editCForm.error}>{errors.origin}</label>
                  ) : (
                    <label className={editCForm.errorC}>Origin</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Origin"}
                    className={editCForm.fieldE}
                    name="origin"
                    enterKeyHint="next"
                    required
                  >
                    <option value="" selected disabled hidden>
                      Origin
                    </option>
                    <option value="iran">Iran</option>
                    <option value="turkey">Turkey</option>
                    <option value="afganistan">Afganistan</option>
                  </Field>
                </div>

                <div className={editCForm.holder}>
                  {errors.age && touched.age ? (
                    <label className={editCForm.error}>{errors.age}</label>
                  ) : (
                    <label className={editCForm.errorC}>Age</label>
                  )}
                  <Field
                    placeholder={"Age"}
                    className={editCForm.fieldE}
                    name="age"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.family && touched.family ? (
                    <label className={editCForm.error}>{errors.family}</label>
                  ) : (
                    <label className={editCForm.errorC}>Family</label>
                  )}
                  <Field
                    placeholder={"Family"}
                    className={editCForm.fieldE}
                    name="family"
                    enterKeyHint="next"
                  />
                </div>
                <div className={editCForm.holder}>
                  {errors.price && touched.price ? (
                    <label className={editCForm.error}>{errors.price}</label>
                  ) : (
                    <label className={editCForm.errorC}>Price</label>
                  )}
                  <Field
                    placeholder={"Price"}
                    className={editCForm.fieldE}
                    name="price"
                    enterKeyHint="next"
                    inputMode="numeric"
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.details && touched.details ? (
                    <label className={editCForm.error}>{errors.details}</label>
                  ) : (
                    <label className={editCForm.errorC}>Details</label>
                  )}
                  <Field
                    placeholder={"Details"}
                    className={editCForm.fieldA}
                    as="textarea"
                    name="details"
                    enterKeyHint="next"
                    required
                  />
                </div>
                <div className={editCForm.holder}>
                  {errors.weight && touched.weight ? (
                    <label className={editCForm.error}>{errors.weight}</label>
                  ) : (
                    <label className={editCForm.errorC}>Weight</label>
                  )}
                  <Field
                    placeholder={"Weight"}
                    className={editCForm.fieldE}
                    name="weight"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.type && touched.type ? (
                    <label className={editCForm.error}>{errors.type}</label>
                  ) : (
                    <label className={editCForm.errorC}>Type</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Type"}
                    className={editCForm.fieldE}
                    name="type"
                    enterKeyHint="next"
                    required
                  >
                    <option value="" selected disabled hidden>
                      Types
                    </option>
                    <option value="carpet">Carpet</option>
                    <option value="kilim">Kilim</option>
                    <option value="tablecloth">Tablecloth</option>
                  </Field>
                </div>
                <div className={editCForm.holder}>
                  <input
                    type="file"
                    id="img_1"
                    className={editCForm.fieldE}
                    name="img_1"
                    onChange={(e) => setFieldValue("img_1", e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.inputsContainer}>
                  <div className={editCForm.holder}>
                    <input
                      type="file"
                      id="img_3"
                      className={editCForm.fieldE}
                      name="img_3"
                      onChange={(e) =>
                        setFieldValue("img_3", e.target.files[0])
                      }
                    />
                  </div>
                  <div className={editCForm.holder}>
                    <input
                      type="file"
                      id="img_2"
                      className={editCForm.fieldE}
                      name="img_2"
                      onChange={(e) =>
                        setFieldValue("img_2", e.target.files[0])
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={editCForm.loginOr}>
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={editCForm.addFBtn}
                >
                  Edit product
                </button>
                {/* <button
                  onClick={() => setIsRegister(!isRegister)}
                  className={register.orRegister}
                >
                  Have Account?
                </button> */}
                {/* {loading ? ( */}
                {/* <Loading /> */}
                {/* ) : error ? ( */}
                {/* <Error error={errorLogin} /> */}
                {/* ) : ( */}
                <></>
                {/* )} */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
