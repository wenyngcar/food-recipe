import { useParams } from "react-router-dom"

export default function FoodDetails() {
  const { mealId } = useParams()

  return (
    <div>
      <p> {mealId} </p>
    </div>
  )
}
