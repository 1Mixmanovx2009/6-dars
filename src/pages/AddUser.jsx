import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const {users, setUsers} = useContext(Context)
    const navigate = useNavigate(); // here is the fix

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            id: users.length,
            title: e.target.userValue.value
        }
        setUsers([...users, data])
        setTimeout(() => {
            navigate("/users")
        }, 800)
    }

    return (
        <form onSubmit={handleSubmit} className='w-[500px] mx-auto rounded-md bg-slate-500 mt-[50px] p-5'>
            <input className='border-[2px] border-slate-700 p-2 w-full rounded-lg' type="text" placeholder='Typing...' name='userValue' />
            <button type='submit' className='bg-green-600 p-2 rounded-md mt-4 block mx-auto w-full text-white font-bold text-[20px]'>Submit</button>
        </form>
    )
}

export default AddUser
