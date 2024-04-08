import  axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const View = () => {
    const [content, setContent] = useState([])
    const [search,setSearch] = useState('')
    const [search1,setSearch1] = useState('')
    const Navigate = useNavigate()
    console.log(search);
    useEffect(() => {
        axios.get('https://json-data-finance.onrender.com/details')
            .then((response) => {
                setContent(response.data)
            })
            .catch((error)=>{
                console.log("Error in get",error);
            })
    },[])
    let ondelete = (s) =>{
        axios.delete(`https://json-data-finance.onrender.com/details/${s}`)
    }
    return (
        <div className='md:w-[100%] md:h-[100vh]'>
            <nav className='flex items-center h-[12vh] justify-between px-[1vw]'>
                <h1 className='text-[2vw] font-bold'>MY EXPENSE MANAGER</h1>
                <div>
                    <input onChange={(e)=>{setSearch1(e.target.value)}} type="text" className='rounded-md md:w-[20vw] md:mr-[2vw]' placeholder='Filter by Date of Expensive' />
                    <input onChange={(e)=>{setSearch(e.target.value)}} type="text" className='rounded-md md:w-[20vw] md:mr-[2vw]' placeholder='Search Expensive by Name' />
                    <Link to="/addexpenses"><button className='text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-500'><i className="fa-solid fa-plus"></i> New Expense</button></Link>
                    <button onClick={()=>{Navigate('/login')}} className='text-white bg-green-600 px-4 py-2 ml-2 rounded-md hover:bg-red-600'> Logout</button>
                </div>
            </nav>
            <table className="table-auto w-[90%] m-auto mt-10">
                <thead>
                    <tr className='bg-gray-400 text-left text-[1vw] h-[9vh]'>
                        <th className='border border-slate-600 pl-3'>Name</th>
                        <th className='border border-slate-600 pl-3'>Category</th>
                        <th className='border border-slate-600 pl-3'>Date of Expensive</th>
                        <th className='border border-slate-600 pl-3'>Amount</th>
                        <th className='border border-slate-600 pl-3'>Updated At</th>
                        <th className='border border-slate-600 pl-3'>Created by</th>
                        <th className='border border-slate-600 pl-3'></th>
                    </tr>
                </thead>
                {
                    content.filter((x)=>{
                        return (search.toLowerCase() === ''
                        || x
                            .name.toLowerCase().includes(search)) &&
                            (search1.toLowerCase() === '' || x.doe.toLowerCase().includes(search1))
                        
                    }).map((x) => {
                        return (
                            <tbody key={x.id}>
                                <tr className='text-[1vw] h-[9vh] '>
                                    <td className="border border-slate-700 pl-3">{x.name}</td>
                                    <td className="border border-slate-700 pl-3">{x.category}</td>
                                    <td className="border border-slate-700 pl-3"> {x.doe}</td>
                                    <td className="border border-slate-700 pl-3">INR {x.amount}</td>
                                    <td className="border border-slate-700 pl-3">{x.updayed}</td>
                                    <td className="border border-slate-700 pl-3">{x.created}</td>
                                    <td className="border border-slate-700 text-center" >
                                        <Link to={`/editexpenses/${x.id}`}><button><i className="fa-solid fa-pen text-gray-700"></i></button></Link>
                                        <button onClick={()=>{ondelete(x.id)}} className='ml-5 text-red-600'><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>

                            </tbody>
                        )
                    })
                }

            </table>
        </div>
    )
}

export default View