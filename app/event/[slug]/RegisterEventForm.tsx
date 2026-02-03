"use client"
import { useState } from "react";

import TextInput from "@/components/form/TextInput";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HiArrowLongRight } from "react-icons/hi2";
import Alert, { AlertPropsType } from "@/components/ui/alert";
import { registerEvent, RegisterEventFormErrors, RegisterEventPayload, validateRegisterEventForm } from "./RegisterEventServices";

export function RadioGroupFieldset({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label" className="text-sm uppercase text-black tracking-widest group-focus-within:text-primary-orange group-focus-within:font-semibold">
        Jadwal Kedatangan
      </FieldLegend>
      <RadioGroup defaultValue={value} value={value} onValueChange={onChange}>
        <Field orientation="horizontal">
          <RadioGroupItem value="07-02-2026" id="07022026" />
          <FieldLabel htmlFor="07022026" className="font-normal">
            Sabtu, 07 Februari 2026
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="08-02-2026" id="08022026" />
          <FieldLabel htmlFor="08022026" className="font-normal">
            Minggu, 08 Februari 2026
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

const RegisterEventForm = ({
  eventSlug
}: {
  eventSlug: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<AlertPropsType | null>(null);
  const [errors, setErrors] = useState<RegisterEventFormErrors | null>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState("");

  const setDefaultState = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSelectedSchedule("");
  };

  const deleteErrorHandler = (event: React.ChangeEvent<HTMLInputElement> | string) => {
    if (errors) {
      const newErrors = errors;
      const removedProperty = typeof event === "string" ? event : event.target.name;
      delete newErrors[removedProperty];
      setErrors(newErrors);
    };
  };

  const handleRegisterEvent = async (payload: RegisterEventPayload) => {

    const successRequest = await registerEvent(payload);
    if (!successRequest) return;

    const { status, message } = successRequest;

    if (status === 200) {
      setAlert({
        variant: "success",
        message: "Pendaftaran berhasil. Silahkan cek email Anda."
      });
      setTimeout(() => {
        setIsLoading(false);
        setDefaultState();
        setAlert(null);
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
      eventSlug, name, phone, email, selectedSchedule
    };

    const { isValid, formErrors } = validateRegisterEventForm({ ...payload });

    try {
      if (isValid) {
        handleRegisterEvent(payload);
      } else {
        setIsLoading(false);
        setErrors(formErrors);
        setAlert({
          variant: "error",
          message: "Lengkapi formulir dengan benar"
        });
      };
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setAlert({
        variant: "error",
        message: "Something went wrong. Please try again later."
      });
    }
  };

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      <div>
        <TextInput
          label="nama"
          name="name"
          placeholder="Masukkan nama Anda"
          value={name}
          onChange={e => {
            deleteErrorHandler(e.target.name);
            setName(e.target.value);
          }}
          disabled={isLoading}
          error={errors?.name}
        />
      </div>
      <div className="mt-3">
        <TextInput
          label="email"
          name="email"
          placeholder="Masukkan email Anda"
          value={email}
          onChange={e => {
            deleteErrorHandler(e.target.name);
            setEmail(e.target.value);
          }}
          disabled={isLoading}
          error={errors?.email}
        />
      </div>
      <div className="mt-3">
        <TextInput
          label="No. WA"
          type="number"
          name="phone"
          placeholder="Masukkan no. WA Anda"
          value={phone}
          onChange={e => {
            deleteErrorHandler(e.target.name);
            setPhone(e.target.value);
          }}
          disabled={isLoading}
          error={errors?.phone}
        />
      </div>
      <div className="mt-3">
        <RadioGroupFieldset
          value={selectedSchedule}
          onChange={(value: string) => setSelectedSchedule(value)}
        />
      </div>
      {alert && <Alert options={alert} />}
      <div className='flex justify-end lg:justify-start mt-8'>
        <button
          type="submit"
          className="button-primary-orange rounded-lg! px-5 py-2 h-full text-sm flex items-center justify-center gap-1.5 w-full"
        >
          Daftar
          <HiArrowLongRight />
        </button>
      </div>
    </form>
  )
}

export default RegisterEventForm;