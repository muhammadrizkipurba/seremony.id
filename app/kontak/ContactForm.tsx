"use client"
import React, { useState } from 'react'
import TextInput from '@/components/form/TextInput'
import { HiArrowLongRight } from 'react-icons/hi2';
import TextAreaInput from '@/components/form/TextAreaInput';

const ContactForm = () => {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className='bg-white p-5 border-b-primary-orange border-b-8'>
      <div className='flex flex-col gap-7'>
        <TextInput
          id="name"
          label="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Masukkan nama'
        />
        <TextInput
          id="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Masukkan email'
        />
        <TextInput
          id="phone"
          type='number'
          label="No. Whatsapp"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Masukkan nomor whatsapp'
        />
        <TextAreaInput
          id="message"
          label="Pesan / pertanyaan"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Masukkan pesan atau pertanyaan'
        />
        <div className='flex justify-end lg:justify-start'>
          <button 
            onClick={() => {}}
            className="button-primary-orange px-5 py-2 h-full text-sm flex items-center justify-center gap-1.5"
          >
            Kirim
            <HiArrowLongRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm