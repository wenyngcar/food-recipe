import { useEffect, useState } from "react"

export function ListOfCategory() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const res = await fetch(apiUrl)
    const data = await res.json()
    setCategories(data.meals)
    setIsLoading(false)
    // console.log(data.meals)
  }

  // Call this first when FetchMeal is called. 
  useEffect(() => {
    searchRecipes()
  }, [])

  return { categories, isLoading }
}
