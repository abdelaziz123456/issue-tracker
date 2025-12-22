import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "@/app/utils/validations";
import { IFormInput } from "../types";

export const useIssueForm = (title?: string, description?: string) => {
  const router = useRouter();
  const [value, setValue] = useState("Enter the description here!");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [beError, setBeError] = useState<string | null>(null);
  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    resolver: yupResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      title: title,
      description: description,
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      setIsSubmitting(true);
      axios
        .post("/api/issues", data)
        .then((response) => {
          if (response.status === 201) {
            setValue("Enter the description here!");
            setBeError(null);
            router.push("/issues");
          }
        })
        .catch((error) => {
          setBeError(error.response.data.error.title._errors[0]);
        });
    } catch (error) {
      setBeError("Something went wrong");
      setIsSubmitting(false);
    }
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
    beError,
  };
};
