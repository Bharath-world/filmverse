function CategoryFilter({ onCategorySelect }) {
  return (
    <div className="flex justify-center mt-4 space-x-3">
      <button
        onClick={() => onCategorySelect("popular")}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        🔥 Trending
      </button>
      <button
        onClick={() => onCategorySelect("top_rated")}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ⭐ Top Rated
      </button>
      <button
        onClick={() => onCategorySelect("now_playing")}
        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        🎥 Now Playing
      </button>
    </div>
  );
}

export default CategoryFilter;
