
const RestaurantCard = ({ restaurant }) => {
    const {
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = restaurant?.info || {};

    return (
        <div className="m-4 p-4 w-64 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
            <div className="relative w-full h-48 overflow-hidden">
                <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
                <p className="text-sm text-gray-600 truncate">{cuisines?.join(', ')}</p>
                <div className="flex justify-between items-center mt-3 text-sm">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">⭐ {avgRating}</span>
                    <span className="text-gray-700">{sla?.deliveryTime} mins</span>
                    <span className="text-gray-700 font-semibold">{costForTwo}</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;