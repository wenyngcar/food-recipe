import { useParams, Link } from "react-router-dom";
import mealDetails from "@/api/mealDetails";
import { CheckCircle } from "lucide-react";
// import { House } from 'lucide-react';
import { useEffect } from "react";

export default function FoodDetails() {
  const { mealId } = useParams();
  const { meal, isLoading } = mealDetails(mealId);

  if (isLoading) return <p>Loading...</p>;

  window.scrollTo(0, 0);

  const instructions = meal["strInstructions"]
    ?.split(/(?<=\.(?![a-z]))\s+(?=[A-Z])/g)
    .filter((step) => step.trim().length > 0)
    .map((step) => step.trim());

  return (
    <div className="space-y-10 py-[8%] px-[15%] -mt-25 bg-[url(/src/assets/foodDescriptionBG.svg)] bg-no-repeat bg-cover h-[1000px] text-white">
      {/* Header Nav */}
      {/* <div className="py-4 px-6 mb- border-a border-gray-50"> */}
      {/*   <Link */}
      {/*     to="/" */}
      {/*     className="text-green-600 hover:text-green-800 font-medium text-lg transition" */}
      {/*   > */}
      {/*     <House /> */}
      {/*   </Link> */}
      {/* </div> */}

      {/* Meal Name */}
      <div className="space-y-1">
        <p className="text-3xl font-semibold">{meal["strMeal"]}</p>
        <div className="flex space-x-2">
          <p className="bg-slate-700 text-white px-3 py-[2px] rounded-full text-sm">
            {meal["strCategory"]}
          </p>
          <p className="bg-slate-700 text-white px-3 py-[2px] rounded-full text-sm">
            {meal["strArea"]}
          </p>
        </div>
      </div>

      {/* Meal Image and Ingredients */}
      <div className="flex space-x-10 flex-wrap">
        <div className="h-52">
          <img src={meal["strMealThumb"]} className="rounded-2xl h-full" />
        </div>
        <div className="md:w-1/2 space-y-5">
          <p className="text-3xl font-semibold">Ingredients</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-white">
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

      {/* Instructions */}
      <div className="space-y-5 w-2/3 pb-[10%]">
        <p className="text-3xl font-semibold">Instructions</p>
        <div className="">
          <ul className="space-y-3">
            {instructions?.map((step, idx) => {
              const hasNumber = /^\d+\./.test(step);
              let trimmedStep = step;

              if (hasNumber) {
                trimmedStep = step.replace(/^\d+\.\s*/, "").trim();
              }

              if (!trimmedStep) {
                return null;
              }

              return (
                <li key={idx} className="flex items-start space-x-3">
                  {/* Enclosed checkbox with fixed size */}
                  <div className="flex items-center justify-center w-6 h-6">
                    <CheckCircle
                      className="text-green-500 hover:text-green-600 transition-all duration-200 transform hover:scale-125"
                      size={20}
                    />
                  </div>
                  <p className="text-white">{trimmedStep}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
