import { useEffect, useState } from "react"

export default function mealDetails(id: any) {
  const apiUrl = "www.themealdb.com/api/json/v1/1/lookup.php?i="
  const [isLoading, setIsLoading] = useState(false)
  const [meal, setMeal] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const res = await fetch(apiUrl + id)
    const data = await res.json()
    setMeal(data.meals)
    setIsLoading(false)
    console.log(data.meals)
  }

  // Call this first when FetchMeal is called. 
  useEffect(() => {
    searchRecipes()
  }, [])

  return { meal, isLoading }

}
