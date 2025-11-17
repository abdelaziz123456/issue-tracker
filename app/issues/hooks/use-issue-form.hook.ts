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
  const [beError, setBeError] = useState<string | null>(null);
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
    try {
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
