import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoading: true,
    };
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movie, isLoading: false }));
  }

  renderDetails() {
    const { movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, ptTitle, director } = movie;
    return (
      <div className="movieDetails">
        <img className="imgDetails" alt="Movie Cover" src={ `../${imagePath}` } />
        <h1>{ `${title}` }</h1>
        <p>{ `${ptTitle}` }</p>
        <p>{ `${storyline}` }</p>
        <p>{ `Diretor: ${director}` }</p>
        <p>{ `Gênero: ${genre}` }</p>
        <p>{ `Avaliações: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
      )
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="detailsPage">
        {isLoading && <Loading />}
        {isLoading || this.renderDetails()}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
