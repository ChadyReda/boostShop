"use client"
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Header from '../components/Header'


const Dashboard = () => {
  const {data, status} = useSession()
  useEffect(()=> {
   if (!data?.user){
    redirect("http://localhost:3000/api/auth/signin")
   } 
  }, [])
  return (
    <div className='h-screen bg-slate-800'>
      <Header></Header>
      <div>
        <p className='text-center p-12 text-2xl text-white'>welcom to the dashboard mr {data?.user?.name}</p>
      </div>
    </div>
  )
}

export default Dashboard