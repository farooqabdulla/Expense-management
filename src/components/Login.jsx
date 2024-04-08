import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()
    let [user, setuser] = useState([])

    useEffect(() => {
        axios.get('https://json-data-finance.onrender.com/signup')
          .then((res) => {
            console.log(res.data);
            setuser(res.data)
          })
          .catch((err) => {
            console.log(err);
          })
      }, [])

    // let loginbut = (e) =>{
    //     e.preventDefault()
    //     axios.post('https://json-data-finance.onrender.com/signup',{email,password})
    //     .then((response)=>{
    //         if (response.email === email && response.password === password) {
    //             return(
    //                 Navigate('/viewexpenses')
    //             )
    //         }
    //         else{
    //             console.log("Wrong credentials");
    //         }
    //     })
    // }

    function loginbut(e) {
        let a = false;
        e.preventDefault();
        user.map((x) => {
          if (email == x.email && password == x.password) {
            alert("user logged in successfully");
            navigate('/viewexpenses')
            a = true
          }
        })
        if (a == false) {
          alert("user login Failed");
        }
      }
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center'>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h1 className='text-center text-[5vh] mb-12' >Login</h1>
                {/* <form action="" onSubmit={loginbut} className=' shadow-2xl pt-10 pb-10 pl-5 pr-5 rounded-[15px]'> */}
                <form action="" className=' shadow-2xl pt-10 pb-10 pl-5 pr-5 rounded-[15px]'>
                    <div>
                        <div>
                            <div className="flex md:items-center justify-between">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    id="name"
                                    name="name"
                                    type="email"
                                    autoComplete="current-name"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
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
                        onClick={loginbut}>
                            Login
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Have a account then,
                    <Link to='/' href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login