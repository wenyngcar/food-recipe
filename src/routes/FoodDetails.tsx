import { useParams } from "react-router-dom";
import mealDetails from "@/api/mealDetails";
import { CheckCircle } from "lucide-react";

export default function FoodDetails() {
  const { mealId } = useParams();
  const { meal, isLoading } = mealDetails(mealId);

  if (isLoading) return <p>Loading...</p>;

  // Split instructions into individual sentences
  const instructions = meal["strInstructions"]
    ?.split(/(?<=\.)\s+/) // Split after periods
    .filter((step) => step.trim().length > 0);

  return (
    <div className="space-y-10 py-[4%]">
      {/* Meal Name */}
      <div className="space-y-3">
        <p className="text-5xl font-semibold">{meal["strMeal"]}</p>
        <div className="flex space-x-2">
          <p className="bg-slate-700 text-white px-3 py-[2px] rounded-full text-sm">{meal["strArea"]}</p>
          <p className="bg-slate-700 text-white px-3 py-[2px] rounded-full text-sm">{meal["strCategory"]}</p>
        </div>
      </div>

      {/* Meal Image and Ingredients */}
      <div className="flex space-x-10">
        <div className="h-125">
          <img src={meal["strMealThumb"]} className="rounded-2xl h-full" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <p className="text-4xl font-semibold">Ingredients</p>
          <div className="bg-yellow-50 p-4 rounded-xl shadow-inner border-l-4 border-yellow-400">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-gray-800">
              {Array.from({ length: 20 }, (_, i) => {
                const ingredient = meal[`strIngredient${i + 1}`];
                const measurement = meal[`strMeasure${i + 1}`];
                return ingredient && ingredient.trim() ? (
                  <li key={i}>
                    <span className="font-medium">{measurement}</span> {ingredient}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="space-y-5">
        <p className="text-4xl font-semibold">Instructions</p>
        <div className="bg-yellow-50 p-8 rounded-xl shadow-inner border-4 border-yellow-100 hover:border-yellow-400 transition-colors duration-300">
          <ul className="space-y-3">
            {instructions?.map((step, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <CheckCircle
                  className="text-green-500 mt-1 hover:text-green-600 transition-all duration-200 transform hover:scale-125"
                  size={20}
                />
                <p className="text-gray-800">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
