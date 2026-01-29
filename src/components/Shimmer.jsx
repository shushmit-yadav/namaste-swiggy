const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-4 p-4 m-4">
            <div className="w-48 h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-48 h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-48 h-48 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
    );
};

export default Shimmer;