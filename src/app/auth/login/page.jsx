// "use client"
import React from 'react'
import LoginForm from '@/components/auth/forms/LoginForm';


export default function page() {
  return (
    <div className='grid place-items-center h-screen pt-20 sm:pt-16 md:pt-4 lg:pt-10'>
      <LoginForm />
    </div>
  )
}
