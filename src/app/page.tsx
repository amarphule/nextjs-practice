import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-3">
    <h1>Welcome to Next js Practice</h1>
    <Link className='border border-slate-800 p-2 rounded-md' href={'products'}>Navigate to Product page</Link>
    <Link className='border border-slate-800 p-2 rounded-md' href={'account'}>Navigate to Account page</Link>
    </main>
  );
}
