import { FETCH_MENU_URL} from "../constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);
	console.log(restaurantId);

	useEffect(() => {
    fetchRestaurantMenu();
  }, []);


  const fetchRestaurantMenu = async () => {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const jsonData = await data.json();
    const restaurant = jsonData?.data;
    setRestaurant(restaurant);
  };

  return restaurant;
};

export default useRestaurantMenu;
