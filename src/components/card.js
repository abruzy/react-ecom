import React from 'react'

const Card = ({ image, title, price, figcaption, details }) => {
  return (
    <div className='shadow-sm rounded hover:shadow-xl border border-gray-200 cursor-pointer rounded-bl-3xl rounded-tr-3xl'>
      <div className='h-64 rounded-tr-3xl rounded-bl-3xl'>
        <img
          src={image}
          alt=''
          className='h-64 object-cover max-w-full w-full rounded-tr-3xl rounded-bl-3xl'
        />
      </div>
      <div>
        <div className='flex justify-between mt-8 mb-4 px-4'>
          <h2 className='text-black1 font-semibold text-2xl'>{title}</h2>
          <h2 className='text-black1 font-semibold text-2xl'>{price}</h2>
        </div>
        <p className='pl-4 mb-6 text-light-gray text-sm font-medium'>
          {figcaption}
        </p>
        <p className='px-4 text-light-gray text-sm font-medium'>{details}</p>
        <div className='h-20 flex justify-between items-center mt-4'>
          <p className='pl-7'>****</p>
          <button className='bg-orange1 h-20 px-4 w-28 text-white text-5xl rounded-tl-3xl'>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
