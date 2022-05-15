import * as Yup from "yup";

export const initialValues = {
  name: null,
  width: null,
  height: null,
  stock: null,
  origin: null,
  age: null,
  family: null,
  details: null,
  weight: null,
  price: null,
  type: null,
  product_id: null,
  // img_1: null,
  // img_2: null,
  // img_3: null,
};

export const addProductSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Should be string")
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  width: Yup.number().typeError("Should be number").required("Required"),
  height: Yup.number().typeError("Should be number").required("Required"),
  stock: Yup.number().typeError("Should be number").required("Required"),
  origin: Yup.string().typeError("Should be string").nullable(true),
  age: Yup.number().typeError("Should be number").nullable(true),
  family: Yup.string()
    .typeError("Should be string")
    .min(3, "Too short!")
    .max(30, "Too long!")
    .nullable(true),
  details: Yup.string()
    .typeError("Should be string")
    .min(10, "Too short!")
    .max(150, "Too long!")
    .nullable(true),
  weight: Yup.number().typeError("Should be number").required("Required"),
  price: Yup.number().typeError("Should be number").required("Required"),
  type: Yup.string().typeError("Should be string").required("Required"),
  img_1: Yup.object().nullable(true),
  img_2: Yup.object().nullable(true).default(null),
  img_3: Yup.object().nullable(true).default(null),
});
