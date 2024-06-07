"use client"
import { useState, useEffect } from 'react';
import NewCompanyCard from '@/app/components/ui/NewCompanyCard';
import NewCompanyForm from '../components/ui/NewCompanyForm';
import SeeCompany from '@/app/components/ui/SeeCompany'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [business, setBusiness] = useState([]);

  const handleToggleForm = () => {
    setIsFormOpen(prevState => !prevState);
    console.log(isFormOpen)
  };

  async function getBusiness() {
    try {
      const response = await fetch(`/api/getbusiness`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data)
      setBusiness(data.rows);
    } catch (error) {
      console.error('Error fetching business data:', error);
    }
  }

  useEffect(() => {
    getBusiness();
  }, []); 

  return (
    <main className='flex flex-wrap gap-4'>
      
      <NewCompanyCard onclick={handleToggleForm} />
      {isFormOpen && <NewCompanyForm />}
      {business.map((company) => (
        <SeeCompany key={uuidv4()} text={company.nombre} />

))}
    </main>
  );
}