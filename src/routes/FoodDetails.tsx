import { useParams } from "react-router-dom"
import mealDetails from "@/api/mealDetails"
export default function FoodDetails() {
  const { mealId } = useParams()
  const { meal, isLoading } = mealDetails(mealId)

  return (
    <div className="space-y-10 py-[4%]">
      {/* Meal Name */}
      <div className="space-y-3">
        <p className="text-5xl font-semibold">{meal["strMeal"]}</p>
        <div className="flex space-x-1">
          <p className="bg-slate-700 text-white px-2 py-[1px] rounded text-sm">{meal["strArea"]}</p>
          <p className="bg-slate-700 text-white px-2 py-[1px] rounded text-sm">{meal["strCategory"]}</p>
        </div>
      </div>

      {/* Meal Image and Ingredients */}
      <div className="flex space-x-10">
        <div className="h-96">
          <img src={meal["strMealThumb"]} className="rounded-2xl h-full" />
        </div>
        <div className="space-y-5">
          <p className="text-4xl">Ingredients</p>
          <ul className="list-disc ps-5">
            {Array.from({ length: 20 }, (_, i) => {
              const ingredient = meal[`strIngredient${i + 1}`]
              const measurement = meal[`strMeasure${i + 1}`]
              return ingredient ? <li key={i}>{measurement} {ingredient}</li> : null
            })}
          </ul>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-4xl">Instructions</p>
        <p> {meal["strInstructions"]} </p>
      </div>
    </div>
  )
}
