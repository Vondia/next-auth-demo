'use client'

import { signIn } from "next-auth/react"

export default function LoginBtn() {
    return <button className="bg-slate-500 text-white px-4 py-2 rounded-xl" onClick={() => signIn()}>Login</button>
}