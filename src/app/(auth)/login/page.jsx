"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router =  useRouter()
    const onSubmit = () => {
        router.push("/profile")
        console.log("onSubmit")
    }
    return (
        <div>Login

            <button onClick={onSubmit}  >LOGIN</button>
        </div>
    )
}

export default Login