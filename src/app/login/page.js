'use client'

import React, { useEffect, useState} from 'react';


export default function Home() {
  const [data, setData] = useState("");
  const username = "Paco"

  useEffect(() => {
    fetch(`api/searchuser?usuario=${username}`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Error' ,error))
  }, []);


  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      {data ? (
        <div>
          <h1>Data for {username}:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
