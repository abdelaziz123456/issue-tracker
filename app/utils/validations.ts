import * as yup from "yup";

const formSchema = yup
  .object({
    title: yup
      .string()
      .required()
      .min(3, "min length is 3")
      .max(100, "max length is 100"),
    description: yup
      .string()
      .required()
      .min(10, "min length is 10")
      .max(1000, "max length is 1000"),
  })
  .required();

export default formSchema;
