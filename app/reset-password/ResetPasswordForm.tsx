'use client'
import { useState } from "react";
import Alert, { AlertPropsType } from "@/components/ui/alert";
import { ResetPasswordFormErrors, ResetPasswordPayload, resetPasswordRequest, validateResetPasswordFormValues } from "./resetPasswordServices";
import Loading from "@/components/Loading";
import { HiArrowLongRight } from "react-icons/hi2";
import TextInput from "@/components/form/TextInput";
import { useRouter, useSearchParams } from "next/navigation";

const ResetPasswordForm = () => {
  const router = useRouter();
  const queryParams = useSearchParams();
  
  const token = queryParams.get("token");
  const email = queryParams.get("email");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<ResetPasswordFormErrors | null>(null);

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleResetPassword = async () => {
    const payload: ResetPasswordPayload = {
      token,
      password
    };

    const successRequest = await resetPasswordRequest(payload);
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

    const payload = { 
      email: email || "",
      password,
      confirm_password: confirmPassword
    };

    const { isValid, formErrors } = validateResetPasswordFormValues({ ...payload });

    if(isValid) {
      handleResetPassword();
    } else {
      setIsLoading(false);
      setErrors(formErrors);
      setAlert({
        variant: "error",
        message: "Lengkapi formulir dengan benar"
      });
    };
  };

  if (!email || !token) {
    return (
      <div className='flex flex-col gap-8'>
        <Alert options={{
          variant: "error",
          message: "Link is not valid. Please request a new one"
        }} />
      </div>
    )
  };

  return (
    <form onSubmit={submitHandler} className="mt-10">
      <p>Instruksi untuk reset password akan diberikan melalui email</p>
      <div className='text-left flex flex-col gap-5 my-10'>
        <TextInput
          id="email"
          name="email"
          label="Email"
          placeholder="Masukkan email"
          value={email}
          disabled={true}
          onChange={() => {}}
          error={errors?.email}
        />
        <TextInput
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Masukkan password"
          value={password}
          disabled={isLoading}
          onChange={(e) => {
            deleteErrorHandler(e.target.name);
            setPassword(e.target.value.trim())
          }}
          error={errors?.password}
        />
        <TextInput
          id="confirmPassword"
          name="confirmPassword"
          label="Konfirmasi Password"
          type="password"
          placeholder="Ketik ulang password"
          value={confirmPassword}
          disabled={isLoading}
          onChange={(e) => {
            deleteErrorHandler(e.target.name);
            setConfirmPassword(e.target.value.trim())
          }}
          error={errors?.confirmPassword}
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

export default ResetPasswordForm