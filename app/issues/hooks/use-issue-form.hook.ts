import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IFormInput {
  title: string;
  description: string;
}
export const useIssueForm = () => {
  const router = useRouter();
  const [value, setValue] = useState("Enter the description here!");
  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    axios
      .post("/api/issues", data)
      .then(() => {
        setValue("Enter the description here!");
        router.push("/issues");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    value,
    setValue,
    onChange,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    isValid,
  };
};
