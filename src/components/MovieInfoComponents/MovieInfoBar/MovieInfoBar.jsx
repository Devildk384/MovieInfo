import React from 'react'
import FontAwesome from 'react-fontawesome';

import Fade from 'react-reveal/Fade';
import {calcTime, convertMoney} from '../../../helpers'
import './MovieInfoBar.scss';

function MovieInfoBar({time,budget,revenue}) {
    return (
        <Fade>
        <section className="movie-info-bar">
          <div className="movie-info-bar__item">
          <span aria-hidden="true" class="fa fa-clock-o fa-2x fa-time"></span>
            <span className="movie-info-bar__info">
               Running Time: {calcTime(time)}
            </span>
          </div>
          <div className="movie-info-bar__item">
            <FontAwesome className="fa-budget" name="money" size="2x" />
            <span className="movie-info-bar__info">
             Budget: {convertMoney(budget)}
            </span>
          </div>
          <div className="movie-info-bar__item">
            <FontAwesome className="fa-revenue" name="ticket" size="2x" />
            <span className="movie-info-bar__info">
              Revenue: {convertMoney(revenue)}
            </span>
          </div>
        </section>
      </Fade>
    )
}

export default MovieInfoBar
