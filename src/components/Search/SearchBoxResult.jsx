import React from 'react'
import { Link } from 'react-router-dom';
import "./SearchBoxResult.scss";

function SearchBoxResult({results}) {
    const list = results.map((item) => item.original_title )
    console.log(list);
    const link = 'https://image.tmdb.org/t/p/w300';

    return (
        <ul id="results" className='searchResults'>
            {results.map((movie, index) => {
            return(
                <li key={index}  className="result">
                    <Link to={`/movieinfo/${movie.id}`} >
                        <img src={movie.poster_path === null ? 'https://dummyimage.com/243x350/7b8a91/ffffff&text=Poster+Not+Available' : `${link}${movie.poster_path}`} alt={`${movie.title} poster`} className="resultPoster" />
                        <div>
                            <p></p>
                            <span className="title">{movie.title} </span>
                            <span>({movie.release_date})</span>
                            <p className="overview" style={{fontSize:"12px", fontWeight:"300"}}>{movie.overview.slice(0,147)+'...'} </p>
                        </div>
                    </Link>
                </li>
            )
            })}
        </ul>
        );
    
}

export default SearchBoxResult
