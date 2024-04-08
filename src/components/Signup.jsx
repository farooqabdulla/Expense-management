import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  axios from 'axios'
const Signup = () => {
    let [username,setUsername] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let posting = (e) =>{
        e.preventDefault()
        axios.post('https://json-data-finance.onrender.com/signup',{username,email,password})
    }
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center'>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h1 className='text-center text-[5vh] mb-12' >Sign up</h1>
                <form onSubmit={posting} action="" className='md:shadow-2xl  pt-10   pb-10 pl-5 pr-5 rounded-[15px]'>
                    <div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={username}
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="current-name"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 mt-5">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mt-5">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Have a account then,
                    <Link to='/login' href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup