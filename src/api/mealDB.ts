import { useEffect, useState } from "react"

export function useFetchMeal() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("")
  const [meal, setMeal] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const url = apiUrl + query
    const res = await fetch(url)
    const data = await res.json()
    setMeal(data.meals)
    setIsLoading(false)
    console.log(data.meals)
  }


  // Call Function on useEffect.
  useEffect(() => {
    searchRecipes()
  }, [])

  return { meal, isLoading, query }
}



