import { isEmptyObject, isValidEmail } from "@/lib/utils";

export type ResetPasswordFormValues = {
  email: string;
  password: string;
  confirm_password: string;
}

interface ResetPasswordFormErrorsObjectKeys {
  [key: string]: string;
}

export interface ResetPasswordFormErrors extends ResetPasswordFormErrorsObjectKeys {
  email: string;
  password: string;
  confirmPpassword: string;
};

export type ResetPasswordPayload = {
  token: string | null;
  password: string | null;
};

const validateResetPasswordFormValues = (values: ResetPasswordFormValues) => {
  const { 
    email,
    password,
    confirm_password
  } = values;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};

  if(!email) {
    errors["email"] = "Wajib diisi";
  } else {
    if(!isValidEmail(email)) errors["email"] = "Email tidak valid";
  };

  if(!password) {
    errors["password"] = "Wajib diisi";
  } else {
    if(password.length < 8) errors["password"] = "Min. 8 karakter";
  };

  if(!confirm_password) {
    errors["confirmPassword"] = "Wajib diisi";
  } else {
    if(password !== confirm_password) errors["confirmPassword"] = "Password tidak sesuai";
  };

  return {
    isValid: isEmptyObject(errors),
    formErrors: errors
  };
};

const resetPasswordRequest = async(payload: ResetPasswordPayload) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL+"/auth/reset-password";

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
  validateResetPasswordFormValues,
  resetPasswordRequest
};