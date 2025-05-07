import { useState, useEffect } from "react";

export function FilterByArea(area: string) {
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;

const [meals, setMeals] = useState<any[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(false);

const fetchMealsByArea = async () => {
    setIsLoading(true);
    try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setMeals(data.meals);
    } catch (error) {
    console.error("Error fetching meals:", error);
    } finally {
    setIsLoading(false);
    }
};

useEffect(() => {
    if (area) {
    fetchMealsByArea();
    }
}, [area]);

return { meals, isLoading };
}
