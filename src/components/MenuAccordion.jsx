import { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MenuAccordion = ({ categories }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      {categories?.map((category, index) => {
        const cardData = category?.card?.card;
        if (!cardData) return null;

        const { title, itemCards = [] } = cardData;
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="text-sm text-gray-500">
                  {itemCards.length} items
                </p>
              </div>

              <span
                className={`transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="bg-gray-50 px-4 py-3 space-y-5">
                {itemCards.map((item, idx) => {
                  const info = item?.card?.info;
                  if (!info) return null;

                  return (
                    <div
                      key={idx}
                      className="flex justify-between gap-4 border-b last:border-b-0 pb-5"
                    >
                      {/* LEFT SIDE */}
                      <div className="flex-1">
                        {/* Veg / Non-veg */}
                        <div
                          className={`w-3 h-3 border rounded-sm mb-1 flex items-center justify-center
                            ${
                              info.isVeg
                                ? "border-green-600"
                                : "border-red-600"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full
                              ${
                                info.isVeg
                                  ? "bg-green-600"
                                  : "bg-red-600"
                              }`}
                          />
                        </div>

                        <p className="font-medium text-gray-800">
                          {info.name}
                        </p>

                        <p className="text-sm text-gray-600 mt-1">
                          ₹{(info.price || info.defaultPrice) / 100}
                        </p>

                        {info.description && (
                          <p className="text-xs text-gray-400 mt-2 line-clamp-2">
                            {info.description}
                          </p>
                        )}
                      </div>

                      {/* RIGHT SIDE */}
                      {info.imageId && (
                        <div className="relative w-28 h-24">
                          <img
                            src={IMG_CDN_URL + info.imageId}
                            alt={info.name}
                            className="w-full h-full object-cover rounded-lg"
                          />

                          {/* ADD Button */}
                          <button
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2
                              bg-white text-green-600 font-semibold text-sm
                              px-5 py-1 rounded shadow-md border"
                          >
                            ADD
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuAccordion;
