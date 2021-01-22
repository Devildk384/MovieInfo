import React, {useEffect,useState} from 'react';
import HomeMoviesList from '../../components/HomeMoviesList/HomeMoviesList'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import "../Home/Home.scss";

import {APIKEY} from '../../config';
import SearchBox from '../../components/Search/SearchBox';

function Home() {
    
    const [state, setState] = useState({
       
        latestMovies:[]
    })

    const { latestMovies } = state;

    useEffect(() => {
        const fetchData = async () => await getLatestMovies();
        fetchData();
      }, []);

    const getLatestMovies = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?&api_key=${APIKEY}&language=en-US`
        );
        const now_latest = await response.json();
        setState({ latestMovies:now_latest.results});
    };

    return (
        <div className="home-container">

        <SearchBox/>

        <HomeCarousel/>

        <HomeMoviesList latestMovies ={latestMovies}/>
            
        </div>
    )
}

export default Home;
