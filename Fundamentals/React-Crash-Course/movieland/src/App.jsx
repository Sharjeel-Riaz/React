import React from "react";
import { useState, useEffect } from "react";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";
import "./App.css";

// API key is stored in .env file
const API_URL = import.meta.env.VITE_API_KEY;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // To make an API call, we need to use the fetch() function.
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Matrix");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found.</h2>
        </div>
      )}
    </div>
  );
};

export default App;
