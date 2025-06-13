import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="text-center mt-6">
      <form onSubmit={handleSubmit} className="flex justify-center gap-2">
        <input
          type="text"
          placeholder="Search Telugu Movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 w-72 border rounded-lg shadow"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
