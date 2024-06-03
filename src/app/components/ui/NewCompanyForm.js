import React from 'react';
import Input from '@/app/components/ui/input';

function NewCompanyCard({ onClick }) {
  return (
    <div onClick={onClick} className='absolute z-10 p-4 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded left-1/2 top-1/2'>
      <form className="" action="" method="">
        <Input type="text" name="nombre" placeholder="Nombre empresa"/>
      </form>
    </div>
  );
}

export default NewCompanyCard;
