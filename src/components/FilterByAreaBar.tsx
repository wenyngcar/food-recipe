import React, { useState } from "react";
import { FilterByArea } from "../api/FilterByArea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Link } from "react-router-dom";

const areas = ["American", "British", "Chinese", "French", "Indian", "Italian", "Japanese", "Mexican", "Thai"]; // Example areas

export default function FilterByAreaBar() {
const [selectedArea, setSelectedArea] = useState<string>("");
const { meals, isLoading } = FilterByArea(selectedArea);

const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(e.target.value);
};

return (
    <div className="py-6 px-4 bg-gray-50">
    {/* Filter Dropdown */}
    <div className="mb-6 flex items-center space-x-4">
        <label htmlFor="area" className="text-xl font-semibold text-gray-700">
        Filter by Area:
        </label>
        <select
        id="area"
        name="area"
        value={selectedArea}
        onChange={handleAreaChange}
        className="px-4 py-2 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
        <option value="">Select an Area</option>
        {areas.map((area) => (
            <option key={area} value={area}>
            {area}
            </option>
        ))}
        </select>
    </div>

    {/* Meal Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
        <div className="w-full text-center text-lg text-gray-600">Loading meals...</div>
        ) : meals?.length > 0 ? (
        meals.map((meal: any) => (
            <Link to={`/food-details/${meal.idMeal}`} key={meal.idMeal}>
            <Card className="border-2 border-gray-100 rounded-xl transition transform hover:scale-105 hover:shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-t-xl">
                <CardTitle className="text-white text-xl font-semibold">{meal.strMeal}</CardTitle>
                <CardDescription className="text-white text-sm">{meal.strCategory}</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-full h-40 object-cover rounded-lg transition transform hover:scale-110"
                />
                </CardContent>
            </Card>
            </Link>
        ))
        ) : (
        <p className="w-full text-center text-lg text-gray-600">No meals found for this area.</p>
        )}
    </div>
    </div>
);
}
