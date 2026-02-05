import { isEmptyObject, isValidEmail } from "@/lib/utils";

export type AccountActivationFormValues = {
  locale?: string;
  email: string |  null;
}

interface AccountActivationFormErrorsObjectKeys {
  [key: string]: string;
}

export interface AccountActivationFormErrors extends AccountActivationFormErrorsObjectKeys {
  email: string;
  password: string;
};

export type AccountActivationPayload = {
  email: string | null;
  token: string | null;
};

const validateAccountActivationFormValues = (values: AccountActivationFormValues) => {
  const { 
    locale,
    email,
  } = values;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};

  if(!email) {
    errors["email"] = locale === "en" ? "This field is required" : "Wajib diisi";
  } else {
    if(!isValidEmail(email)) errors["email"] = locale === "en" ? "Email is not valid" : "Email tidak valid";
  };

  return {
    isValid: isEmptyObject(errors),
    formErrors: errors
  };
};

const accountActivation = async(payload: AccountActivationPayload) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL+"/auth/activate-account";

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
  validateAccountActivationFormValues,
  accountActivation
}