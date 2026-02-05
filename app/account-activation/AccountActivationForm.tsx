"use client"
import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import Alert, { AlertPropsType } from '@/components/ui/alert';
import { accountActivation, AccountActivationFormErrors, AccountActivationPayload, validateAccountActivationFormValues } from './accountActivationServices';
import Loading from '@/components/Loading';
import { HiArrowLongRight } from 'react-icons/hi2';
import TextInput from '@/components/form/TextInput';

const AccountActivationForm = () => {
  const router = useRouter();
  const queryParams = useSearchParams();

  const token = queryParams.get("token");
  const email = queryParams.get("email");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<AccountActivationFormErrors | null>(null);

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleAccountActivation = async () => {
    const payload: AccountActivationPayload = {
      email,
      token
    };

    const successRequest = await accountActivation(payload);
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

  const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);

    const payload = { email, token };

    const { isValid, formErrors } = validateAccountActivationFormValues({ ...payload });

    if (isValid) {
      handleAccountActivation();
    } else {
      setIsLoading(false);
      setErrors(formErrors);
      setAlert({
        variant: "error",
        message: "Lengkapi formulir dengan benar"
      });
    };
  };

  const onClickResendEmail = async () => {
    console.log("Resend new activation link");
  };

  if (!email || !token) {
    return (
      <div className='flex flex-col gap-8'>
        <Alert options={{
          variant: "error",
          message: "Link is not valid. Please request a new one"
        }} />
        <div className='flex justify-end lg:justify-start mb-10 mt-4'>
          <button
            onClick={onClickResendEmail}
            className="button-primary-orange rounded-full! px-5 py-3 h-full text-sm flex items-center justify-center gap-1.5 w-full cursor-pointer disabled:opacity-80"
            disabled={isLoading}
          >
            {isLoading ?
              <Loading show={isLoading} spinnerClassName="text-white" />
              :
              <>
                Kirim Ulang Link Aktivasi
                <HiArrowLongRight />
              </>
            }
          </button>
        </div>
      </div>
    )
  };
  return (
    <form onSubmit={submitHandler}>
      <p>Tekan tombol Aktivasi Akun di bawah untuk aktivasi akun Anda.</p>
      <div className='text-left my-10'>
        <TextInput
          id="email"
          name="email"
          label="Email"
          placeholder="Masukkan email"
          value={email}
          disabled
          onChange={() => { }}
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
              Aktivasi Akun
              <HiArrowLongRight />
            </>
          }
        </button>
      </div>
    </form>
  )
}

export default AccountActivationForm