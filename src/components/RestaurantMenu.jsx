import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import MenuAccordion from "./MenuAccordion";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantDetails = useRestaurantMenu(id);

  const itemCategories =
    restaurantDetails?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];

  if (!itemCategories.length) {
    return <div className="p-4 text-center">Loading menu...</div>;
  }
  return (
    <div className="p-4">
      <MenuAccordion categories={itemCategories} />
    </div>
  );
};

export default RestaurantMenu;
