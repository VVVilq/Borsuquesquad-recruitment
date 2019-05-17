import React, { Component } from 'react';
import axios from 'axios'


const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

class Movie extends Component {

    state = {
        movie: null
    }

    componentDidMount(){
        let id= this.props.match.params.movie_id;
        console.log(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`).then(res=>{
            console.log(res)
            this.setState({
                movie:res.data
            })
        })
    }

    render() {
        const movieToRender = this.state.movie?(<div>
            <h4>{this.state.movie.Title}</h4>
            <img src={this.state.movie.Poster} alt="Poster"/>
            <p>Plot: {this.state.movie.Plot}</p>
            <p>IMDb rating: {this.state.movie.imdbRating}</p>
            <p>IMDb votes: {this.state.movie.imdbVotes}</p>
            <p>Released: {this.state.movie.Released}</p>
            <p>Runtime: {this.state.movie.Runtime}</p>
            <p>Genre: {this.state.movie.Genre}</p>
            <p>Awards: {this.state.movie.Awards}</p>
            <p>Director: {this.state.movie.Director}</p>
            <p>Writer: {this.state.movie.Writer}</p>
        </div>):(<div>Loading movie ...</div>)
        return (
            <div>
                {movieToRender}
            </div>
        )
    }
}

export default Movie;