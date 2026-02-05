import { 
  // generateRandomString, 
  isValidEmail 
} from "@/lib/utils";

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirm_password: string;
  agreementChecked: boolean;
}

interface SignupFormErrorsObjectKeys {
  [key: string]: string;
}

export interface SignupFormErrors extends SignupFormErrorsObjectKeys {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agreementChecked: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

const isEmptyObject = (object: object) => {
  return Object.keys(object).length === 0;
};

const validateFormValues = (values: FormValues) => {
  const { 
    name,
    email,
    phone,
    password,
    confirm_password,
    agreementChecked
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

  if(!name) errors["fullName"] = "Wajib diisi";
  if(!phone) errors["phone"] = "Wajib diisi";
  if(!confirm_password) {
    errors["confirmPassword"] = "Wajib diisi";
  } else {
    if(password !== confirm_password) errors["confirmPassword"] = "Password tidak sesuai";
  };
  if(!agreementChecked) errors["agreementChecked"] = "Wajib diisi";

  return {
    isValid: isEmptyObject(errors),
    formErrors: errors
  };
};

const signupUser = async(payload: SignupPayload) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL+"/auth/register";

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
  validateFormValues,
  signupUser
};
