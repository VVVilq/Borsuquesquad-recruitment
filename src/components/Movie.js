import React, { Component } from 'react';
import axios from 'axios'


const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

class Movie extends Component {

    signal = axios.CancelToken.source();

    state = {
        isLoading: false,
        movie: null
    }

    componentDidMount() {
        this.onLoadUser();
    }

    componentWillUnmount() {
        this.signal.cancel('Api is being canceled');
    }


    onLoadUser = async () => {
        try {
            let id = this.props.match.params.movie_id;
            this.setState({ isLoading: true });
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`, {
                cancelToken: this.signal.token,
            })
            this.setState({ movie: response.data, isLoading: true });
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message); // => prints: Api is being canceled
            } else {
                this.setState({ isLoading: false });
            }
        }
    }

    render() {
        const movieToRender = this.state.movie ? (<div>
            <h4>{this.state.movie.Title}</h4>
            <img src={this.state.movie.Poster} alt="Poster" />
            <p>Plot: {this.state.movie.Plot}</p>
            <p>IMDb rating: {this.state.movie.imdbRating}</p>
            <p>IMDb votes: {this.state.movie.imdbVotes}</p>
            <p>Released: {this.state.movie.Released}</p>
            <p>Runtime: {this.state.movie.Runtime}</p>
            <p>Genre: {this.state.movie.Genre}</p>
            <p>Awards: {this.state.movie.Awards}</p>
            <p>Director: {this.state.movie.Director}</p>
            <p>Writer: {this.state.movie.Writer}</p>
        </div>) : (<div>Loading movie ...</div>)
        return (
            <div id="detailcontainer">
                {movieToRender}
            </div>
        )
    }
}

export default Movie;