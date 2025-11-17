import React, { ChangeEvent } from 'react'
import { Input } from '../ui/input'

type Props = {
  id?: string;
  label?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange
}: Props) => {
  return (
    <div className='group'>
      {label && <label className='text-sm uppercase text-black tracking-widest group-focus-within:text-primary-orange group-focus-within:font-semibold'>{label}</label> }
      <Input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='bg-transparent border-b-2 border-gray-200 shadow-none px-0 h-12! mt-0 focus-visible:ring-0 focus-visible:border-primary-orange'
      />
    </div>
  )
}

export default TextInput