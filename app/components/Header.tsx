"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"


function AuthButton() {
    const {data: session, status} = useSession()
    if (session){
        return (
            <div>
                <button className="border-none bg-blue-500 text-white py-3 px-3 font-bold rounded-md" onClick={() => signOut()}>
                    Logout {session?.user?.email}
                </button>
            </div>
        )
    }
    return (
        <div>
            <button className="border-none bg-blue-500 text-white py-3 px-3 font-bold rounded-md" onClick={() => signIn()}>
                Login {status}
            </button>
        </div>
    )
}

export default function Header(){
    return (
        <div className=" h-14 bg-slate-900 w-full flex flex-row justify-between items-center px-10">
            <div>
                <Link href="/" className=" text-white font-bold text-2xl tracking-widest mx-5">Demo App</Link>
                <Link href="/dashboard" className=" text-blue-500 text-2xl mx-5 font-bold">Dashboard</Link>
            </div>
            <AuthButton/>
        </div>
    )
}