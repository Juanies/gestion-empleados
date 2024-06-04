'use client'

import Button from '@/app/components/ui/button';
import Input from '@/app/components/ui/input';
import Option from '@/app/components/ui/optionslogin';
import { useState } from 'react';

export default function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!username) errors.username = "Username is required";
    if (!mail) errors.mail = "Email is required";
    if (!password) errors.password = "Password is required";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail && !emailPattern.test(mail)) {
      errors.mail = "Invalid email format";
    }

    if (password && password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();



    const payload = { username, password, mail };

    fetch(`api/newuser`, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((responseData) => {
        setUsername("");
        setPassword("");
        setMail("");
        setData(responseData);
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
      });
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
            <Input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
            <Input
              type="email"
              name="email"
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              placeholder="Email"
            />
            {errors.mail && <p className="text-red-500">{errors.mail}</p>}
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>
        </div>
        <Button click={handleSubmit} type={1} text="SUBMIT" />
      </form>
    </main>
  );
}
