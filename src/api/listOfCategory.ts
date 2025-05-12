import { useEffect, useState } from "react"

export function FilterList(filter: string) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/list.php?${filter}=list`

  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true)
    const res = await fetch(apiUrl)
    const data = await res.json()
    setList(data.meals)
    setIsLoading(false)
    console.log(data.meals)
  }

  // Call this first when FetchMeal is called. 
  useEffect(() => {
    searchRecipes()
  }, [])

  return { list, isLoading }
}
