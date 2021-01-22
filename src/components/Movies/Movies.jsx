import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import './Movies.scss'

function Movies({ movieList, getMovieById, title,  }) {
    return (
        <section className='movie-list'>
        <div className='movie-list__wrapper'>
  
          <div className='group'>
            <div className='group-item line' />
            <h1 className='title group-item text'>{title}</h1>
            <div className='group-item line' />
          </div>
  
          <MovieList movieList={movieList} getMovieById={getMovieById} />
        </div>
      </section>
    )
}

export default Movies
