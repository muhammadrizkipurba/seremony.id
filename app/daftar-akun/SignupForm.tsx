"use client"

import { useState } from "react"
import { HiArrowLongRight } from "react-icons/hi2";
import TextInput from "@/components/form/TextInput"
import Loading from "@/components/Loading"
import Alert, { AlertPropsType } from "@/components/ui/alert";
import { SignupFormErrors, SignupPayload, signupUser, validateFormValues } from "./signupServices";
import Link from "next/link";
import CheckboxInput from "@/components/CheckboxInput";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<SignupFormErrors | null>(null);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [agreementChecked, setAgreementChecked] = useState<boolean>(false);

  const setDefaultFormValues = () => {
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setAgreementChecked(false);
  };

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleLoginUser = async () => {
    const payload: SignupPayload = {
      name,
      email,
      password,
      phone
    };

    const successRequest = await signupUser(payload);
    if (!successRequest) return;

    const { status, message, data } = successRequest;

    if (status === 200) {
      setAlert({
        variant: "success",
        title: "Register Success",
        message
      });

      setTimeout(() => {
        setDefaultFormValues();
        setAlert(null);
        setIsLoading(false);
        router.push("/login");
      }, 5000);
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

    const payload = {
      name,
      email,
      phone,
      password,
      confirm_password: confirmPassword,
      agreementChecked
    };

    const { isValid, formErrors } = validateFormValues({ ...payload });

    if (isValid) {
      handleLoginUser();
    } else {
      setIsLoading(false);
      setErrors(formErrors);
      setAlert({
        variant: "error",
        message: "Lengkapi form dengan benar"
      });
    };
  };

  return (
    <div className="my-10 lg:ml-8">
      <form className="text-start flex flex-col gap-5" onSubmit={submitHandler}>
        <TextInput
          id="name"
          name="name"
          label="Nama lengkap"
          placeholder="Masukkan name"
          value={name}
          onChange={({ target }) => {
            deleteErrorHandler(target.name);
            setName(target.value)
          }}
          error={errors?.email}
          disabled={isLoading}
        />
        <TextInput
          id="email"
          name="email"
          label="Email"
          placeholder="Masukkan email"
          value={email}
          onChange={({ target }) => {
            deleteErrorHandler(target.name);
            setEmail(target.value.toLowerCase().trim())
          }}
          error={errors?.email}
          disabled={isLoading}
        />
        <TextInput
          id="phone"
          name="phone"
          type="number"
          label="No. Whatsapp"
          placeholder="Masukkan no. whatsapp"
          value={phone}
          onChange={({ target }) => {
            deleteErrorHandler(target.name);
            setPhone(target.value.toString())
          }}
          error={errors?.phone}
          disabled={isLoading}
        />
        <TextInput
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Masukkan password"
          value={password}
          onChange={({ target }) => {
            deleteErrorHandler(target.name);
            setPassword(target.value.toLowerCase().trim())
          }}
          error={errors?.password}
          disabled={isLoading}
        />
        <TextInput
          id="confirmPassword"
          name="confirmPassword"
          label="Konfirmasi Password"
          type="password"
          placeholder="Masukkan ulang password"
          value={confirmPassword}
          onChange={({ target }) => {
            deleteErrorHandler(target.name);
            setConfirmPassword(target.value.toLowerCase().trim())
          }}
          error={errors?.confirmPassword}
          disabled={isLoading}
        />
        <div className="my-2">
          <div className="bg-gray-100 p-4 rounded-xl mb-2">
            <CheckboxInput
              error={errors?.agreementChecked}
              disabled={isLoading}
              checked={agreementChecked}
              onChange={() => {
                deleteErrorHandler("agreementChecked");
                setAgreementChecked(!agreementChecked);
              }}
              label={
                <div className='text-xs ml-2 w-full'>
                  Saya setuju dengan segala
                  <Link href="/terms-and-conditions" className="underline font-semibold mx-2">
                    Syarat dan Ketentuan
                  </Link>
                  serta
                  <Link href="/privacy-policy" className="underline font-semibold mx-2">
                    Kebijakan Privasi
                  </Link>
                </div>
              }
            />
          </div>
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
                Daftar Akun
                <HiArrowLongRight />
              </>
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm