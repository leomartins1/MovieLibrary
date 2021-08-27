import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movieCard">
        <img className="imgCard" src={movie.imagePath} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p className="storyCard">{movie.storyline}</p>
        <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
