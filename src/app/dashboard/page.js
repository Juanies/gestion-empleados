"use client"
import { useState } from 'react';
import NewCompanyCard from '@/app/components/ui/NewCompanyCard';
import NewCompanyForm from '../components/ui/NewCompanyForm';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleToggleForm = () => {
    setIsFormOpen(prevState => !prevState);
  };

  return (
    <main >
      <NewCompanyCard onclick={handleToggleForm} />
      {isFormOpen && <NewCompanyForm />}
    </main>
  );
}
