
import React, {useState,useEffect} from 'react';
import MovieCredit from '../../components/MovieInfoComponents/MovieCredits/MovieCredit';
import MovieData from '../../components/MovieInfoComponents/MovieData/MovieData';
import MovieInfoBar from '../../components/MovieInfoComponents/MovieInfoBar/MovieInfoBar';
import MovieOverview from '../../components/MovieInfoComponents/MovieOverview/MovieOverview';
import SimilarMovies from '../../components/MovieInfoComponents/SimilarMovies/SimilarMovies';
import SearchBox from '../../components/Search/SearchBox';
import {APIKEY} from '../../config';
import './MovieInfo.scss';


function MovieInfo(props) {

   const [movie, setMovie] = useState([]);
   const [genres , setGenres] = useState([]);
   const [credits, setCredits] = useState([]);
   const [similarMovies, setSimilarMovies] = useState([]);
   

   const { movie_id } = props.match.params;
   const base_url = "https://image.tmdb.org/t/p/w500";
   const base_url2 = "https://image.tmdb.org/t/p/w1400_and_h450_face";


   useEffect(() => {

    const fetchData = async () => {
        await getMovieById(movie_id);
        await getMovieCredits(movie_id);
        await getSimilarMovies(movie_id)

    };
    fetchData();

     
   }, [])

   const getMovieById = async (ID) => {
       console.log(ID);
     
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${ID}?&api_key=${APIKEY}&language=en-US`
    );

    const movie = await response.json();
    console.log(movie);
    setMovie(movie)
    setGenres(movie.genres)

   };


   const getMovieCredits = async (ID) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${ID}/credits?&api_key=${APIKEY}&language=en-US`
    );
    const credits = await response.json();
    setCredits(credits.cast);
  };


  const getSimilarMovies = async (ID) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${ID}/similar?&api_key=${APIKEY}&language=en-US&page=1`
      );
      const movies = await response.json();
      setSimilarMovies(movies.results)
  }
   


   
   
   


    return (
        

     
        <div className="movie-info-conatiner">
        <SearchBox></SearchBox>
       
        <MovieData

            imgPath1={movie.poster_path}
            imgPath2={movie.backdrop_path}
            base_url1={base_url}
            base_url2={base_url2}
            movie={movie}
            list={genres}
        />
        <MovieOverview overview={movie.overview}/>

        <MovieInfoBar 
            time={movie.runtime}
            budget={movie.budget}
            revenue= {movie.revenue}
        />

       <MovieCredit credits={credits}/>

       {similarMovies.length > 0 ? (
            <SimilarMovies
              movieList={similarMovies}
              getMovieById={getMovieById}
            />
          ) : null}  
        </div>
    )
}

export default MovieInfo
