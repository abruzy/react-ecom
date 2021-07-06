import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card from '../components/card'

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
            <Card
              key={id}
              image={strMealThumb}
              title={title}
              details={description.slice(0, 100)}
              price={`${price.slice(1, 3)}$`}
              figcaption={strMeal}
            />
          )
        )}
      </div>
    </div>
  )
}

export default LandingPage
