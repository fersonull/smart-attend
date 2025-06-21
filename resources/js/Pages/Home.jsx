import React from 'react'
import { Head, usePage } from '@inertiajs/react';
import Hero from '@/Components/Hero';

const Home = () => {

  
  const { component } = usePage()

  return (
    <div className='w-100 h-100 p-3 d-flex flex-column align-items-center justify-content-center'>

      <Head title={component} />
      <Hero />
    </div>
  )
}

export default Home