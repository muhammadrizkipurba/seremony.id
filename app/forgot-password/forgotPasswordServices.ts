import { isEmptyObject, isValidEmail } from "@/lib/utils";

export type ForgotPasswordFormValues = {
  locale?: string;
  email: string;
}

interface ForgotPasswordFormErrorsObjectKeys {
  [key: string]: string;
}

export interface ForgotPasswordFormErrors extends ForgotPasswordFormErrorsObjectKeys {
  email: string;
  password: string;
};

export type ForgotPasswordPayload = {
  email: string | null;
};

const validateForgotPasswordFormValues = (values: ForgotPasswordFormValues) => {
  const { 
    email,
  } = values;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};

  if(!email) {
    errors["email"] = "Wajib diisi";
  } else {
    if(!isValidEmail(email)) errors["email"] = "Email tidak valid";
  };

  return {
    isValid: isEmptyObject(errors),
    formErrors: errors
  };
};

const forgotPasswordRequest = async(payload: ForgotPasswordPayload) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL+"/auth/forgot-password";

  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
  
    if(!response.ok) {
      console.log(`HTTP Error! Status : ${response.status}`);
      return;
    };
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}


export {
  validateForgotPasswordFormValues,
  forgotPasswordRequest
};