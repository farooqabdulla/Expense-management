import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const Add = () => {
    let [name,setName] = useState('')
    let [category,setCategory] = useState('')
    let [doe,setDoe] = useState('')
    let [created,setCreated] = useState('')
    let [amount,setAmount] = useState('')
    let [updayed,setUpdate] = useState('')
    let Navigate = useNavigate()
    let posting = (e) =>{
        e.preventDefault()
        axios.post('https://json-data-finance.onrender.com/details',{name,category,doe,amount,updayed,created})
        Navigate('/viewexpenses')
    }
    let direct = () =>{
        Navigate('/viewexpenses')
    }

    return (
        
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-12">
                    <h2 className="mb-5vh text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create New Expense
                    </h2>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={posting}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={name}
                                    onChange={(e)=>{setName(e.target.value)}}
                                    placeholder='Name of Expense'
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    value={updayed}
                                    onChange={(e)=>{setUpdate(e.target.value)}}
                                    placeholder='Describe the Expense'
                                    id="description"
                                    name="description"
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3 w-[100%]">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Category
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    value={category}
                                    onChange={(e)=>{setCategory(e.target.value)}}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
                                >
                                    <option >Select</option>
                                    <option value='Books'>Books</option>
                                    <option value='Health'>Health</option>
                                    <option value='Electronics'>Electronics</option>
                                    <option value='Travel'>Travel</option>
                                    <option value='Education'>Education</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date of Expense
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="description"
                                    name="description"
                                    type="date"
                                    autoComplete="current-password"
                                    required
                                    value={doe}
                                    onChange={(e)=>{setDoe(e.target.value)}}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Expense Amount
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    value={amount}
                                    onChange={(e)=>{setAmount(e.target.value)}}
                                    placeholder='Expense Amount in INR'
                                    id="description"
                                    name="description"
                                    type="text"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                        <p onClick={direct} className='text-center text-blue-700 cursor-pointer'>Back to View Expenses</p>
                    </form>

                    
                </div>
            </div>
        </>
    )
}

export default Add