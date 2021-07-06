import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LandingPage = () => {
  const [mealsData, setMealsData] = useState([])

  const getAllMeals = async () => {
    try {
      const response = await axios.get(
        'https://asm-dev-api.herokuapp.com/api/v1/food'
      )
      console.log(response.data.data.meals)
      setMealsData(response.data.data.meals)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllMeals()
  }, [])

  console.log(mealsData)

  return (
    <div className='max-w-6xl mx-auto my-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-6 px-5'>
        {mealsData.map(
          ({ id, strMeal, strMealThumb, description, title, price }) => (
            <div
              key={id}
              className='shadow-sm rounded hover:shadow-xl border border-gray-200 cursor-pointer rounded-bl-3xl rounded-tr-3xl'
            >
              <div className='h-64 rounded-tr-3xl rounded-bl-3xl'>
                <img
                  src={strMealThumb}
                  alt=''
                  className='h-64 object-cover max-w-full w-full rounded-tr-3xl rounded-bl-3xl'
                />
              </div>
              <div>
                <div className='flex justify-between mt-8 mb-4 px-4'>
                  <h2 className='text-black1 font-semibold text-2xl'>
                    {title}
                  </h2>
                  <h2 className='text-black1 font-semibold text-2xl'>
                    {`${price.slice(1, 3)}$`}
                  </h2>
                </div>
                <p className='pl-4 mb-6 text-light-gray text-sm font-medium'>
                  {strMeal}
                </p>
                <p className='px-4 text-light-gray text-sm font-medium'>
                  {description.slice(0, 100)}
                </p>
                <div className='h-20 flex justify-between items-center mt-4'>
                  <p className='pl-7'>****</p>
                  <button className='bg-orange1 h-20 px-4 w-28 text-white text-5xl rounded-tl-3xl'>
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default LandingPage
