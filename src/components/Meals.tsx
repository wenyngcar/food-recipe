import { FetchMeal } from "../api/mealDB"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export default function Meals({ mealName }: { mealName: string }) {
  // Fetch Meal data here. 
  const { meal, isLoading } = FetchMeal(mealName)

  return (

    <div className="px-[15%] py-[2%]">
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : meal?.length > 0 ? (
          meal.map((item) => (
            <Card key={item.idMeal}>
              <CardHeader>
                <CardTitle>{item.strMeal}</CardTitle>
                <CardDescription>{item.strCategory}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={item.strMealThumb}
                  alt={item.strMeal}
                  className="w-full h-auto rounded"
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  )
}
