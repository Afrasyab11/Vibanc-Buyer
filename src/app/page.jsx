"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router=useRouter()

  useEffect(()=>{
    router.replace("/want-to-be-a");

  },[])
  return (
    <div className="grid place-items-center h-screen">
      Welcome To Vibanc
    </div>
  );
}
