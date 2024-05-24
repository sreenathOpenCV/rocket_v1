"use client";

import { useEffect } from 'react';

export default function Home() {

  async function getApi(){
    const response = await fetch('http://ip-api.com/json/');
    if (!response.ok) {
        throw new Error(`Error fetching IP info: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}


    useEffect(()=>{
      getApi()
      .then(data => console.log("datadatadata",data.country))
      .catch(error => console.error(error));
    }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
