import React, { useState } from 'react';
import Input from '@/app/components/ui/input';
import { Button } from '@/app/components/ui/button';

export default function NewCompanyCard({ onClick }) {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

        }catch(error){
            setError(error.message)
            console.log('Error', error.message)
        }

    }


  return (
    <div onClick={onClick} className='absolute z-10 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded left-1/2 top-1/2'>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={username} onChange={(e) => setName(e.target.value)} name="nombre" placeholder="Nombre empresa"/>
        <Button type="submit"/>
      </form>
    </div>
  );
}
