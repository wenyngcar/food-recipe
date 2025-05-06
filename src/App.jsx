import { useFetchMeal } from "./api/mealDB"

function App() {

  // Call custom hook to fetch all meal.
  useFetchMeal()

  return (
    <>
      <div className='bg-blue-300'>test</div>
      <div>

      </div>
    </>
  )
}

export default App
