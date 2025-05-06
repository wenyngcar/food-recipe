import { useFetchMeal } from "./api/mealDB"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function App() {

  // Call custom hook to fetch all meal.
  const { meal, isLoading, query } = useFetchMeal()

  return (
    <div className="px-[15%]">
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

export default App
