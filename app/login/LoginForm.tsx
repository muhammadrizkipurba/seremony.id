"use client"

import TextInput from "@/components/form/TextInput"
import { useState } from "react"

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="">
      <TextInput
        id="email"
        // label="Email"
        placeholder="Masukkan email"
        value={email}
        onChange={({target}) => setEmail(target.value)}
      />
    </div>
  )
}

export default LoginForm