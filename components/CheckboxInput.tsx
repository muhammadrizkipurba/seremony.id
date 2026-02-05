import React from 'react'
import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'

const CheckboxInput = ({
  label,
  checked,
  error,
  disabled,
  onChange
}: {
  label: string | React.ReactNode;
  checked: boolean;
  error?: string;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: any) => void;
}) => {
  return (
    <div>
      <div className='flex md:flex-start lg:items-center gap-3 lg:gap-2'>
        <Checkbox 
          id="terms" 
          checked={checked} 
          className={`h-5 w-5 mt-1 md:mt-0 rounded-md ${ error && "border-dashed border-red-400"} ${checked ? 'bg-primary-orange! text-white! border-primary-orange font-bold' : 'bg-transparent'}`}
          onClick={onChange}
          disabled={disabled}
        />
        <Label htmlFor="terms" aria-disabled={disabled} className='text-md'>{label}</Label>
      </div>
      {error && <small className='text-red-400 mt-2'>{error}</small>}
    </div>
  )
}

export default CheckboxInput