import React, {useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import {Link, useHistory } from 'react-router-dom';
import Rater from 'react-rater';

const SimilarMovieItem = ({poster,id,title,releaseDate,voteAvg, mediaType}) => {
    const _id = id.toString(); 
    const history = useHistory();

    
    const handle =() =>{
      window.location.replace((_id));
      history.replace(`/movieinfo/${_id}`);  
      
    }


    return (
       <Link
          onClick={handle}
          className="card"
          to={ `/movieinfo/${_id}`}
       >
           <div className="frame">
        <Fade>
          <img className="card__img" src={poster} alt="film poster" />
        </Fade>
        <div className="card__details">
          <h2 className="card__title">{title}</h2>
          <h3 className="card__release-date">{releaseDate}</h3>
          <div className="card__star-rating">
            <Rater className="react-rater" interactive={false} total={5} rating={voteAvg / 2} />
          </div>
        </div>
      </div>
       </Link>
    )
}

export default SimilarMovieItem
