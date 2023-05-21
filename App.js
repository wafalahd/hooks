import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = (change) => {
    setFilterTitle(change.target.value);
  };

  const handleRatingChange = (change) => {
    setFilterRating(change.target.value);
  };

  const handleAddMovie = () => {
    const newMovieId = Math.floor(Math.random() * 100000);
    const newMovie = {
      id: newMovieId,
      title: 'Encanto: the fantastic Madrigal family',
      description:
        'Encanto is a 2021 American computer-animated musical fantasy comedy film produced by Walt Disney',
      afficheURL:
        'https://www.themoviedb.org/t/p/original/75s7inwv1WHRuySyjA6p0oMaz9Z.jpg',
      rating: 8,
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating || movie.rating >= parseInt(filterRating, 8))
    );
  });

  return (
    <div className="App">
      <h1>Movies</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        handleRatingChange={handleRatingChange}
        handleTitleChange={handleTitleChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default App;
