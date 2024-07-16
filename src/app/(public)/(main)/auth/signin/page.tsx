import React from "react"
import FormSignIn from "@/app/components/signin/formsignin"

export default function Signin() {
    return (
        <main className="w-full bg-gray-50 h-screen flex justify-center items-center">
            <div className="card w-96 p-10 bg-white space-y-3 shadow-md">
                <h1 className="text-black font-bold text-xl">Sign In</h1>
                <h1 className="text-gray-400">Masukan akun admin untuk mengelola Website Sugihwaras</h1>
                <FormSignIn />
            </div>
        </main>
    )
}