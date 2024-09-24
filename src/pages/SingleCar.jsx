import React from 'react'
import { useParams } from 'react-router-dom'

function SingleCar() {
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
  const { id } = useParams()
  const SingleData = carsList.find(item => item.id == id)
  
  return (
    <div>
      <div key={SingleData.id} className='w-[300px] p-5 rounded-md mx-auto mt-10 bg-slate-600'>
          <h2 className='text-white'>Car name: {SingleData.carName}</h2>
          <p className='text-white'>Car price: {SingleData.carPrice}</p>
          <p className='text-white'>Car year: {SingleData.carYear}</p>
        </div>
    </div>
  )
}

export default SingleCar