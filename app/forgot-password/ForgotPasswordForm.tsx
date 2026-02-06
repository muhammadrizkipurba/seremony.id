'use client'
import { useState } from "react";
import Alert, { AlertPropsType } from "@/components/ui/alert";
import { ForgotPasswordFormErrors, ForgotPasswordPayload, forgotPasswordRequest, validateForgotPasswordFormValues } from "./forgotPasswordServices";
import Loading from "@/components/Loading";
import { HiArrowLongRight } from "react-icons/hi2";
import TextInput from "@/components/form/TextInput";
import { useRouter } from "next/navigation";

const ForgotPasswordForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<ForgotPasswordFormErrors | null>(null);

  const [email, setEmail] = useState<string>("");

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleForgotPassword = async () => {
    const payload: ForgotPasswordPayload = {
      email
    };

    const successRequest = await forgotPasswordRequest(payload);
    if (!successRequest) return;

    const { status, message } = successRequest;

    if (status === 200) {
      setAlert({
        variant: "success",
        message
      });

      setTimeout(() => {
        setIsLoading(false);
        router.push("/login");
      }, 3000);
    } else {
      setIsLoading(false);
      setAlert({
        variant: "error",
        message
      });
    };
  };

  const submitHandler = async(e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);

    const payload = { email };

    const { isValid, formErrors } = validateForgotPasswordFormValues({ ...payload });

    if(isValid) {
      handleForgotPassword();
    } else {
      setIsLoading(false);
      setErrors(formErrors);
      setAlert({
        variant: "error",
        message: "Lengkapi formulir dengan benar"
      });
    };
  };

  return (
    <form onSubmit={submitHandler} className="mt-10">
      <p>Instruksi untuk reset password akan diberikan melalui email</p>
      <div className='text-left my-10'>
        <TextInput
          id="email"
          name="email"
          label="Email"
          placeholder="Masukkan email"
          value={email}
          disabled={isLoading}
          onChange={(e) => {
            deleteErrorHandler(e.target.name);
            setEmail(e.target.value.toLowerCase().trim())
          }}
          error={errors?.email}
        />
      </div>

      {alert && <Alert options={alert} />}
      <div className='flex justify-end lg:justify-start mb-10 mt-4'>
        <button
          type="submit"
          className="button-primary-orange rounded-full! px-5 py-3 h-full text-sm flex items-center justify-center gap-1.5 w-full cursor-pointer disabled:opacity-80"
          disabled={isLoading}
        >
          {isLoading ?
            <Loading show={isLoading} spinnerClassName="text-white" />
            :
            <>
              Reset Password
              <HiArrowLongRight />
            </>
          }
        </button>
      </div>
    </form>
  )
}

export default ForgotPasswordForm