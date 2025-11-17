"use client"
import React, { ChangeEvent, useCallback, useEffect, useRef } from 'react'
import { Textarea } from '../ui/textarea';

type Props = {
  id?: string;
  label?: string;
  type?: string;
  placeholder: string;
  value: string;
  rows?: number;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaInput = ({
  id,
  label,
  placeholder,
  value,
  rows = 1,
  onChange
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    if (textareaRef.current) {
      // Reset height to 'auto' to correctly calculate scrollHeight
      textareaRef.current.style.height = 'auto';
      // Set height to scrollHeight to fit content
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      // Hide scrollbar
      textareaRef.current.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]); // Re-adjust height when value changes
  return (
    <div className='group'>
      {label && <label className='text-sm uppercase text-black tracking-widest group-focus-within:text-primary-orange group-focus-within:font-semibold'>{label}</label>}
      <Textarea
        ref={textareaRef}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className='bg-transparent border-b-2 border-gray-200 shadow-none px-0 focus-visible:ring-0 focus-visible:border-primary-orange mt-2 h-max'
        style={{ resize: 'none', overflow: 'hidden' }}
      />
    </div>
  )
}

export default TextAreaInput