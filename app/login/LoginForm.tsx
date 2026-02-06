"use client"

import { useState } from "react"
import { setCookie } from "cookies-next/client";
import { HiArrowLongRight } from "react-icons/hi2";
import TextInput from "@/components/form/TextInput"
import Loading from "@/components/Loading"
import Alert, { AlertPropsType } from "@/components/ui/alert";
import { LoginFormErrors, LoginPayload, loginUser, validateLoginFormValues } from "./loginServices";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const redirectParams = useSearchParams().get("redirect");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<LoginFormErrors | null>(null);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleLoginUser = async () => {
    const payload: LoginPayload = {
      email,
      password
    };

    const successRequest = await loginUser(payload);
    if (!successRequest) return;

    const { status, message, data } = successRequest;

    if (status === 200) {
      const { user, authToken } = data;

      const authCookie = {
        isAuthenticated: user ? true : false,
        user: user || null,
        authToken
      };

      setCookie("auth", authCookie);

      if (redirectParams) {
        router.push(`/profile`);
      } else {
        router.push("/katalog");
      };
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
      email,
      password
    };

    const { isValid, formErrors } = validateLoginFormValues({ ...payload });

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
            setPassword(target.value.trim())
          }}
          error={errors?.password}
        />
        <div className="flex items-center justify-end gap-2 text-sm">
          <Link href="/forgot-password" className="font-semibold transition-all ease-in-out duration-300 text-primary-orange hover:scale-105">
            Lupa Password?
          </Link>
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
                Login
                <HiArrowLongRight />
              </>
            }
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm