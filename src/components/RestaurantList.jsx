import { useState, useEffect } from "react";
import { RESTURANT_LIST_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import RestaurantSearch from "./RestaurantSearch";
import RestaurantFilters from "./RestaurantFilters";
import RestaurantMenu from "./RestaurantMenu";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await fetch('https://corsproxy.io/?' + RESTURANT_LIST_API);
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleSearch = (text) => {
    const filtered = listRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredRestaurant(filtered);
  };

  const handleFilter = (type) => {
    let filtered = listRestaurant;

    switch (type) {
      case "TOP_RATED":
        filtered = listRestaurant.filter((res) => res.info.avgRating > 4);
        break;

      case "VEG_ONLY":
        filtered = listRestaurant.filter((res) => res.info.veg === true);
        break;

      case "RESET":
        filtered = listRestaurant;
        break;

      default:
        break;
    }

    setFilteredRestaurant(filtered);
  };

  if (listRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <RestaurantSearch onSearch={handleSearch} />
        <RestaurantFilters onFilter={handleFilter} />
      </div>
      <div className="m-auto p-4 flex flex-wrap w-full">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
