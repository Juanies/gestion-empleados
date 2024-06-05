"use client"
import React, { useState } from 'react';
import Input from '@/app/components/ui/input';
import Button from '@/app/components/ui/button';

export default function NewCompanyCard({ onClick }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');


    
    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch('/api/newbusiness', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });


        const userData = await response.json();
        console.log('Created in as:', userData.username);


      } catch (error) {
        console.error('Error during creation:', error.message);
        setError(error.message);
      }
    };
    
    return (
        <div onClick={onClick} className='absolute z-10 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded left-1/2 top-1/2'>
            <form onSubmit={handleLogin}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Nombre empresa" />
                <Button text="Submit" type="submit" typebutton={1} />
            </form>
        </div>
    );
}