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
    <div>
      {label && <label className='ml-2 font-bold'>{label}</label> }
      <Input 
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='bg-transparent border-gray-100 shadow-xs rounded-2xl px-4 py-5'
      />
    </div>
  )
}

export default TextInput