import React from "react";
import { addProductSchema } from "../../../../validation/addProduct";
import { Formik, Field, Form } from "formik";
import editCForm from "./EditCForm.module.css";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { EDIT_PRODUCT } from "../../../../graphql_f/product/Mutation/editProduct";

export default function EditCForm({
  product_id,
  name,
  weight,
  price,
  type,
  family,
  age,
  width,
  height,
  stock,
  origin,
  description,
  shape,
  made,
  material,
}) {
  const [editProduct, { data, loading, error }] = useMutation(EDIT_PRODUCT);
  const router = useRouter();
  const initialValues = {
    name,
    width,
    height,
    stock,
    origin,
    age,
    family,
    details: description,
    weight,
    price,
    type,
    shape,
    made,
    material,
    product_id,
    // img_1: null,
    // img_2: null,
    // img_3: null,
  };
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
            const _price = data.price;
            const _pieces = parseInt(data.stock);
            const _age = parseInt(data.age);
            const _weight = data.weight;
            const _height = data.height;
            const _width = data.width;
            await editProduct({
              variables: {
                name: data.name,
                price: _price,
                type: data.type,
                width: _width,
                height: _height,
                pieces: _pieces,
                weight: _weight,
                age: _age,
                description: data.details,
                family: data.family,
                origin: data.origin,
                productId: data.product_id,
                made: data.made,
                shape: data.shape,
                material: data.material,
              },
              onCompleted: () => {
                router.push("/carpets");
              },
            });
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
                    inputMode="numeric"
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
                {/* <div className={editCForm.holder}>
                  <input
                    type="file"
                    id="img_1"
                    className={editCForm.fieldE}
                    name="img_1"
                    onChange={(e) => setFieldValue("img_1", e.target.files[0])}
                    required
                  />
                </div> */}
              </div>
              <div className={editCForm.inputsContainer}>
                <div className={editCForm.holder}>
                  {errors.made && touched.made ? (
                    <label className={editCForm.error}>{errors.made}</label>
                  ) : (
                    <label className={editCForm.errorC}>Made</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Made"}
                    className={editCForm.fieldE}
                    name="made"
                    enterKeyHint="next"
                  >
                    <option value="" selected disabled hidden>
                      Made
                    </option>
                    <option value="hand">Hand</option>
                    <option value="machine">Machine</option>
                    <option value="machine&hand">Machine&Hand</option>
                  </Field>
                </div>
                <div className={editCForm.holder}>
                  {errors.material && touched.material ? (
                    <label className={editCForm.error}>{errors.material}</label>
                  ) : (
                    <label className={editCForm.errorC}>Material</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Material"}
                    className={editCForm.fieldE}
                    name="material"
                    enterKeyHint="next"
                  >
                    <option value="" selected disabled hidden>
                      Material
                    </option>
                    <option value="wool">wool</option>
                    <option value="silk">silk</option>
                    <option value="bamboo">bamboo</option>
                  </Field>
                </div>
                <div className={editCForm.holder}>
                  {errors.shape && touched.shape ? (
                    <label className={editCForm.error}>{errors.shape}</label>
                  ) : (
                    <label className={editCForm.errorC}>Shape</label>
                  )}
                  <Field
                    as="select"
                    placeholder={"Shape"}
                    className={editCForm.fieldE}
                    name="shape"
                    enterKeyHint="next"
                  >
                    <option value="" selected disabled hidden>
                      Shape
                    </option>
                    <option value="runner">Runner</option>
                    <option value="normal">Normal</option>
                    <option value="circle">Circl</option>
                    <option value="square">Square</option>
                  </Field>
                </div>
              </div>
              {/* <div className={editCForm.inputsContainer}>
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
              </div> */}
              <div className={editCForm.loginOr}>
                {!loading ? (
                  <button
                    type="submit"
                    disabled={!isValid && dirty}
                    className={editCForm.addFBtn}
                  >
                    Edit product
                  </button>
                ) : (
                  <button disabled={true} className={editCForm.button}>
                    <span className={editCForm.buttonLoading}> </span>
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
