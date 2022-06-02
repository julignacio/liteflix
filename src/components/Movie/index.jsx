import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard, MovieFeatured } from './StyledMovie';
import Button from '../Button';
import play from '../../assets/play.svg';
import play01 from '../../assets/play01.svg';
import playhover from '../../assets/playhover.svg';
import play01hover from '../../assets/play01hover.svg';
import plus from '../../assets/plus.svg';
import star from '../../assets/star.svg';
import Icon from '../Icon';

function Movie({
  variant, movie: {
    title, rating, image, date,
  },
}) {
  switch (variant) {
    case 'featured':
      return (
        <MovieFeatured>
          <h3 className="exclusive">
            Original de
            <strong> Liteflix</strong>
          </h3>
          <h2 className="title">
            {title}
          </h2>
          <div className="buttons">
            <Button variant="primary" className="cta">
              <Icon
                image={play}
                alt=""
                className="play-default"
                hoverImage={playhover}
                size="xsmall"
                element="img"
              />
              <span>Reproducir</span>
            </Button>
            <Button variant="secondary" className="cta">
              <Icon image={plus} alt="" size="xsmall" element="img" />
              <span>Mi lista</span>
            </Button>
          </div>
          <div className="movie-overlay" />
        </MovieFeatured>
      );
    default:
      return (
        <MovieCard>
          <img src={image} alt={title} className="background" />
          <div className="defaultContent">
            <h3 className="title">{title}</h3>
            <Icon image={play01} alt={`Reproducir ${title}`} className="play" />
            <div className="image-overlay" />
          </div>
          <div className="hoverContent">
            <div className="title-container">
              <Icon
                image={play01}
                alt="Reproducir"
                className="playHover"
                size="small"
                hoverImage={play01hover}
              />
              <h3>{title}</h3>
            </div>
            <div className="bottom">
              <div className="rating">
                <img src={star} alt={`${rating} star rating`} />
                <span>{rating}</span>
              </div>
              <span className="year">{date}</span>
            </div>
          </div>
        </MovieCard>
      );
  }
}

Movie.propTypes = {
  variant: PropTypes.oneOf(['featured', 'card']),
  movie: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
};

Movie.defaultProps = {
  variant: 'card',
};

export default Movie;
