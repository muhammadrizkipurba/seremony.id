import { isEmptyObject, isValidEmail } from "@/lib/utils";

export type RegisterEventPayload = {
  name: string;
  phone: string;
  email: string;
  selectedSchedule: string;
}

interface RegisterEventFormErrorsObjectKeys {
  [key: string]: string;
}

export interface RegisterEventFormErrors extends RegisterEventFormErrorsObjectKeys {
  name: string;
  phone: string;
  email: string;
  selectedSchedule: string;
};

const validateRegisterEventForm = (values: RegisterEventPayload) => {
  const { 
    name, phone, email, selectedSchedule
  } = values;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errors: any = {};

  if(!email) {
    errors["email"] = "Wajib diisi";
  } else {
    if(!isValidEmail(email)) errors["email"] = "Email tidak valid";
  };

  if(!name) {
    errors["name"] = "Wajib diisi";
  };

  if(!phone) {
    errors["phone"] = "Wajib diisi";
  };

  if(!selectedSchedule) {
    errors["selectedSchedule"] = "Wajib dipilih";
  };

  return {
    isValid: isEmptyObject(errors),
    formErrors: errors
  };
};

const registerEvent = async(payload: RegisterEventPayload) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL+`/seremony-events/register`;

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
  validateRegisterEventForm,
  registerEvent
}