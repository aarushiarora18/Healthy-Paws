'use client'
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, Mail, Lock, ArrowRight } from 'lucide-react'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "username") {
            setUsername(value)
        } else if (name === "email") {
            setEmail(value)
        }
        else if (name === "password") {
            setPassword(value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if(!username || !email || !password) {
            toast.error('All fields are required')
            setLoading(false)
            return;
        }
        try {
            const response = await axios.post('/api/auth/signup', {
                username,
                email,
                password
            });

            // ✅ Save username in localStorage
            localStorage.setItem('username', response.data.username);

            // ✅ Redirect to home page
            router.push('/');

            console.log(response.data);
            console.log("signup successful");
            
            toast.success('Signup successful!')

            setUsername('')
            setEmail('')
            setPassword('')

        } catch (error) {
            toast.error(error.response?.data?.error || 'Signup failed. Please try again.');
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
            {/* Your signup form UI here */}
            <form onSubmit={handleSubmit}>
                {/* Your input fields and buttons */}
            </form>
        </div>
    )
}

export default Signup;
