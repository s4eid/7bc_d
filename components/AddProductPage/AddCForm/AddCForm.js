import React from "react";
import {
  initialValues,
  addProductSchema,
} from "../../../validation/addProduct";
import { Formik, Field, Form } from "formik";
import addCForm from "./addCForm.module.css";
import { ADD_PRODUCT } from "../../../graphql_f/product/Mutation/addProduct";
import { upload_cloud } from "../../../functions/uploadCloudinary";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function AddCForm() {
  const [addProduct, { data, loading, error }] = useMutation(ADD_PRODUCT);
  const router = useRouter();

  return (
    <div className={addCForm.mainContainer}>
      <div className={addCForm.title}>
        <p>Add Carpet</p>
      </div>
      <div className={addCForm.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={addProductSchema}
          onSubmit={async (data) => {
            const { imageNewArray, public_ids } = await upload_cloud(
              data.img_1,
              data.img_2,
              data.img_3
            );
            data.img_1 = imageNewArray[0];
            data.img_2 = imageNewArray[1];
            data.img_3 = imageNewArray[2];
            data.img1_id = public_ids[0];
            data.img2_id = public_ids[1];
            data.img3_id = public_ids[2];
            const price = parseInt(data.price);
            const pieces = parseInt(data.stock);
            const age = parseInt(data.age);
            const weight = parseInt(data.weight);
            const height = parseInt(data.height);
            const width = parseInt(data.width);
            const admin = "eaa2ec0c-c88d-4fff-91d3-a21494141e14";
            addProduct({
              variables: {
                width,
                height,
                name: data.name,
                price,
                adminId: admin,
                type: data.type,
                pieces,
                img_1: data.img_1,
                img1_id: data.img1_id,
                img_2: data.img_2,
                img2_id: data.img2_id,
                img_3: data.img_3,
                img3_id: data.img3_id,
                origin: data.origin,
                weight,
                age,
                family: data.family,
                // main_color: null,
                description: data.details,
              },
              onCompleted: () => {
                router.push("/");
              },
            });
          }}
        >
          {({ errors, touched, isValid, dirty, setFieldValue }) => (
            <Form className={addCForm.fields}>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.name && touched.name ? (
                    <label className={addCForm.error}>{errors.name}</label>
                  ) : (
                    <label className={addCForm.errorC}>Product name</label>
                  )}
                  <Field
                    id="name"
                    name="name"
                    placeholder="Name"
                    className={addCForm.fieldE}
                    enterKeyHint="next"
                    required
                  />
                </div>
                <div className={addCForm.holder}>
                  {errors.stock && touched.stock ? (
                    <div className={addCForm.error}>
                      <p>{errors.stock}</p>
                    </div>
                  ) : (
                    <div className={addCForm.errorC}>
                      <p>Stock</p>
                    </div>
                  )}
                  <Field
                    placeholder={"Stock"}
                    className={addCForm.field}
                    inputMode="numeric"
                    name="stock"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.height && touched.height ? (
                    <div className={addCForm.error}>
                      <p>{errors.height}</p>
                    </div>
                  ) : (
                    <div className={addCForm.errorC}>
                      <p>H</p>
                    </div>
                  )}
                  <Field
                    placeholder={"Height"}
                    className={addCForm.field}
                    name="height"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
                <div className={addCForm.holder}>
                  {errors.width && touched.width ? (
                    <div className={addCForm.error}>
                      <p>{errors.width}</p>
                    </div>
                  ) : (
                    <div className={addCForm.errorC}>
                      <p>W</p>
                    </div>
                  )}
                  <Field
                    name="width"
                    placeholder="Width"
                    className={addCForm.fieldE}
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.origin && touched.origin ? (
                    <label className={addCForm.error}>{errors.origin}</label>
                  ) : (
                    <label className={addCForm.errorC}>Origin</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Origin"}
                    className={addCForm.fieldE}
                    name="origin"
                    enterKeyHint="next"
                  >
                    <option value="" selected disabled hidden>
                      Origin
                    </option>
                    <option value="iran">Iran</option>
                    <option value="turkey">Turkey</option>
                    <option value="afganistan">Afganistan</option>
                  </Field>
                </div>

                <div className={addCForm.holder}>
                  {errors.age && touched.age ? (
                    <label className={addCForm.error}>{errors.age}</label>
                  ) : (
                    <label className={addCForm.errorC}>Age</label>
                  )}
                  <Field
                    placeholder={"Age"}
                    className={addCForm.fieldE}
                    name="age"
                    inputMode="numeric"
                    enterKeyHint="next"
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.family && touched.family ? (
                    <label className={addCForm.error}>{errors.family}</label>
                  ) : (
                    <label className={addCForm.errorC}>Family</label>
                  )}
                  <Field
                    placeholder={"Family"}
                    className={addCForm.fieldE}
                    name="family"
                    enterKeyHint="next"
                  />
                </div>
                <div className={addCForm.holder}>
                  {errors.price && touched.price ? (
                    <label className={addCForm.error}>{errors.price}</label>
                  ) : (
                    <label className={addCForm.errorC}>Price</label>
                  )}
                  <Field
                    placeholder={"Price"}
                    className={addCForm.fieldE}
                    name="price"
                    enterKeyHint="next"
                    inputMode="numeric"
                    required
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.details && touched.details ? (
                    <label className={addCForm.error}>{errors.details}</label>
                  ) : (
                    <label className={addCForm.errorC}>Details</label>
                  )}
                  <Field
                    placeholder={"Details"}
                    className={addCForm.fieldA}
                    as="textarea"
                    name="details"
                    enterKeyHint="next"
                  />
                </div>
                <div className={addCForm.holder}>
                  {errors.weight && touched.weight ? (
                    <label className={addCForm.error}>{errors.weight}</label>
                  ) : (
                    <label className={addCForm.errorC}>Weight</label>
                  )}
                  <Field
                    placeholder={"Weight"}
                    className={addCForm.fieldE}
                    name="weight"
                    inputMode="numeric"
                    enterKeyHint="next"
                    required
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  {errors.type && touched.type ? (
                    <label className={addCForm.error}>{errors.type}</label>
                  ) : (
                    <label className={addCForm.errorC}>Type</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Type"}
                    className={addCForm.fieldE}
                    name="type"
                    enterKeyHint="next"
                    required
                  >
                    <option selected disabled hidden>
                      Types
                    </option>
                    <option value="carpet">Carpet</option>
                    <option value="kilim">Kilim</option>
                    <option value="tablecloth">Tablecloth</option>
                  </Field>
                </div>
                <div className={addCForm.holder}>
                  <input
                    type="file"
                    id="img_1"
                    className={addCForm.fieldE}
                    name="img_1"
                    onChange={(e) => setFieldValue("img_1", e.target.files[0])}
                    required
                  />
                </div>
              </div>
              <div className={addCForm.inputsContainer}>
                <div className={addCForm.holder}>
                  <input
                    type="file"
                    id="img_3"
                    className={addCForm.fieldE}
                    name="img_3"
                    onChange={(e) => setFieldValue("img_3", e.target.files[0])}
                  />
                </div>
                <div className={addCForm.holder}>
                  <input
                    type="file"
                    id="img_2"
                    className={addCForm.fieldE}
                    name="img_2"
                    onChange={(e) => setFieldValue("img_2", e.target.files[0])}
                  />
                </div>
              </div>
              <div className={addCForm.loginOr}>
                <button
                  type="submit"
                  disabled={!isValid && dirty}
                  className={
                    !isValid ? addCForm.confrimBtnD : addCForm.confrimBtn
                  }
                >
                  Add product
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
