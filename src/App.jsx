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
  useFetchMeal()

  return (
    <>
      <div className='bg-blue-300'>test</div>
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter className="flex justify-between">
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default App
