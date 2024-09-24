import React from 'react'
import { Link } from 'react-router-dom'

function Cars() {
  let carsList = [
    {
      id:1,
      carName:"Rols-Roys Phantom",
      carPrice:"$510 000",
      carYear:"2024"
    },
    {
      id:2,
      carName:"Mercedes-Benz GT",
      carPrice:"$98 950 - $175 900",
      carYear:"2024"
    },
    {
      id:3,
      carName:"Audi A4",
      carPrice:"$48000",
      carYear:"2024"
    },
  ]
  return (
    <div className='flex justify-center gap-10 mt-10'>
      {carsList.map(item => (
        <div key={item.id} className='w-[300px] p-5 rounded-md bg-slate-600'>
          <h2 className='text-white'>Car name: {item.carName}</h2>
          <p className='text-white'>Car price: {item.carPrice}</p>
          <p className='text-white'>Car year: {item.carYear}</p>
          <Link to={`${item.id}`} className='rounded-md block text-center mt-5 bg-slate-400 w-full py-2 font-semibold text-white'>More</Link>
        </div>
      ))}
    </div>
  )
}

export default Cars