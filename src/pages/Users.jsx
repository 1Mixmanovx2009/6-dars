import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

function Users() {
  const navigate = useNavigate()
  const {users} = useContext(Context)

  return (
    <>
    <button onClick={() => navigate("add")} className='bg-green-600 p-2 rounded-md mt-4 block  mx-auto w-[100px] text-white font-bold text-[20px]'>Add</button>
     <ul className='w-[700px] mx-auto mt-5 bg-slate-600 p-5 rounded-md'>
      {users.map((item, index) => (
      <li key={item.id} className='bg-slate-400 space-y-6 text-white p-2 rounded-md'>
        <div className='flex items-center'>
          <span>{index + 1}.</span>
          <strong>{item.title}</strong>
        </div>
      </li>
      ))}
    </ul>
    </>
   
  )
}

export default Users