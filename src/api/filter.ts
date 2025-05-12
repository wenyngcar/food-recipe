import { useEffect, useState } from "react"

export function Filter(filter: string, query: string) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${query}`

  const [isLoading, setIsLoading] = useState(false)
  const [meal, setMeal] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const res = await fetch(apiUrl)
    const data = await res.json()
    setMeal(data.meals)
    setIsLoading(false)
    // console.log(data.meals)
  }

  // Call this first when FetchMeal is called. 
  useEffect(() => {
    searchRecipes()
  }, [query])

  return { meal, isLoading }
}
