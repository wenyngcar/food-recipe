import { useEffect, useState } from "react"

export function FilterByCategory(category: string) {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

  const [isLoading, setIsLoading] = useState(false)
  const [meal, setMeal] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const res = await fetch(apiUrl + category)
    const data = await res.json()
    setMeal(data.meals)
    setIsLoading(false)
    // console.log(data.meals)
  }

  // Call this first when FetchMeal is called. 
  useEffect(() => {
    searchRecipes()
  }, [category])

  return { meal, isLoading }
}
