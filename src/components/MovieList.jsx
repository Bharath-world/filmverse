function MovieList({ movies }) {
  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded-lg shadow hover:scale-105 transition">
          <img
            src={
              movie.poster_path
                ? `${imageBase}${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie.title}
            className="rounded-t-lg h-72 w-full object-cover"
          />
          <div className="p-2 text-center font-semibold">{movie.title}</div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
