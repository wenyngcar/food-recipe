import { FilterByCategory } from "@/api/filterByCategory";
import { useParams } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

import { Link } from "react-router-dom";

export default function FilteredMeals() {
  const { category } = useParams()
  // Fetch Meal data here. 
  const { meal, isLoading } = FilterByCategory(category)

  return (

    <div className="py-[2%]">
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <p>Loading...</p>
        ) : meal?.length > 0 ? (
          meal.map((item) => (
            <Link to={`/food-details/${item.idMeal}`} key={item.idMeal}>
              <Card>
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
            </Link>
          ))
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  )
}
