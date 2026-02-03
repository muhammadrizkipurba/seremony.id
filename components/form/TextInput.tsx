import React, { ChangeEvent } from 'react'
import { Input } from '../ui/input'

type Props = {
  id?: string;
  label?: string;
  name?: string;
  type?: string;
  disabled?: boolean;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  disabled = false,
  error,
  onChange
}: Props) => {
  console.log(error)
  return (
    <div className='group'>
      {label && <label className='text-sm uppercase text-black tracking-widest group-focus-within:text-primary-orange group-focus-within:font-semibold'>{label}</label> }
      <Input 
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`bg-transparent border-b-2 shadow-none px-0 h-12! mt-0 focus-visible:ring-0 focus-visible:border-primary-orange ${error ? "border-red-500 text-red-500" : "border-gray-200"}`}
      />
      {error && <small className='text-red-400 mt-2 pb-4'>{error}</small>}
    </div>
  )
}

export default TextInput