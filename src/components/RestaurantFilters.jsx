const RestaurantFilters = ({ onFilter }) => {
  return (
    <div className="flex gap-4 m-4">
      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => onFilter("TOP_RATED")}
      >
        ⭐ Top Rated
      </button>

      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => onFilter("VEG_ONLY")}
      >
        🥦 Veg Only
      </button>

      <button
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => onFilter("RESET")}
      >
        🔄 Reset
      </button>
    </div>
  );
};

export default RestaurantFilters;
