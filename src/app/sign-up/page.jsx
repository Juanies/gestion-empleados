'use client'

import React, { useEffect, useState } from 'react';
import Option from '@/app/components/ui/optionslogin';
import Input from '@/app/components/ui/input';
import Button from '@/app/components/ui/button';

export default function Home() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  const [data, setData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {name, password, mail}

    fetch(`api/newuser`, {
      method:"POST",
      body: JSON.stringify(payload),
    })
    .then((res) => res.json())
    .then((responseData) => {
      setName("");
      setPassword("");
      setMail("")
      setData(responseData)
    })
    .catch((err) =>{
      console.log(err)
    })

  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <div>
          <span className='font-[600] text-xl'>Envision. Execute</span> <br />
          <span className='text-[#CCCCCC]'>Crea tu cuenta en Salovate</span>
        </div>
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='flex flex-col gap-2'>
            <Option type="google" />
            <Option type="apple" />
          </div>
          <p>O continúa con tu correo electrónico</p>
          <div className='flex flex-col gap-2'>
            <Input type="text" name="username" onChange={(e) => setName(e.target.value)} />
            <Input type="email" name="email" onChange={(e) => setMail(e.target.value)} />
            <Input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <Button click={handleSubmit} type={1} text="SUBMIT" />
      </form>
    </main>
  );
}
