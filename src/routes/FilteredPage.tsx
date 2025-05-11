import LandingPage from "../components/LandingPage";
import FilteredSearchBar from "../components/FilteredSearchBar";

export default function FilteredMeals() {
  // const { category } = useParams()
  // Fetch Meal data here. 
  // const { meal, isLoading } = FilterByCategory(category)

  return (
    <div className="-mt-24">
      <LandingPage />
      <FilteredSearchBar />
    </div>
  );
}
