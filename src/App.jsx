import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const API_KEY = "5b18d52d91226972a12654b6f10c1cd7";

  useEffect(() => {
    if (searchTerm === "" && selectedCategory === "") return;

    const fetchMovies = async () => {
      const endpoint = searchTerm
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=te-IN`
        : `https://api.themoviedb.org/3/movie/${selectedCategory}?api_key=${API_KEY}&language=te-IN`;

      const res = await fetch(endpoint);
      const data = await res.json();
      setMovies(data.results || []);
    };

    fetchMovies();
  }, [searchTerm, selectedCategory]);

  const handleSearch = (query) => {
    setSearchTerm(query);
    setSelectedCategory("");
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategorySelect={handleCategorySelect} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
