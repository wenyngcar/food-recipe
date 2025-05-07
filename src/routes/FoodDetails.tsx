import { useParams } from "react-router-dom"
import mealDetails from "@/api/mealDetails"
import { p } from "react-router/dist/development/fog-of-war-BLArG-qZ"
export default function FoodDetails() {
  const { mealId } = useParams()
  const { meal, isLoading } = mealDetails(mealId)

  return (
    <div>
      <p>{meal["strArea"]}</p>
      <div>
        <img src={meal["strMealThumb"]} />
      </div>
    </div>
  )
}
