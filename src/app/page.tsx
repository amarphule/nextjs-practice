'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter() 
  const handleProduct = ()=>{
    router.push('products')
  }
  const handleAccount = ()=>{
    router.push('account')
  }
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 gap-3">
    <h1 className='font-semi text-3xl'>Welcome to Next js Practice</h1>
    <h2 className='font-semi text-xl'>Routing using Link href</h2>
    <Link className='border border-slate-800 p-2 rounded-md' href={'products'}>Navigate to Product page</Link>
    <Link className='border border-slate-800 p-2 rounded-md' href={'account'}>Navigate to Account page</Link>


    
    <h1 className='font-semi text-xl'>Routing using useRouter from next/navigation</h1>
    <button className='border border-slate-800 p-2 rounded-md' onClick={handleProduct}>Navigate to Product page</button>
    <button className='border border-slate-800 p-2 rounded-md' onClick={handleAccount}>Navigate to Account page</button>
    </main>
  );
}
