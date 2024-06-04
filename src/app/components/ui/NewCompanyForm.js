import React, { useState } from 'react';
import Input from '@/app/components/ui/input';
import Button from '@/app/components/ui/button';

export default function NewCompanyCard({ onClick }) {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        fetch(`api/newbusiness`, {
          method: "POST",
          body: JSON.stringify(name),
        })
  
          .catch((err) => {
            console.log(err);
          });

    }

    return (
        <div onClick={onClick} className='absolute z-10 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded left-1/2 top-1/2'>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} name="nombre" placeholder="Nombre empresa" />
                <Button text="submit" type="submit" typebutton={1} />
            </form>
        </div>
    );
}
