import React, { Component } from 'react';
import axios from 'axios'




class Browse extends Component {

    state = {
        showTitle: ``,
        resultPage: 1,
        movies: [],
        results: 0,
        showSpecified:false,
        exceptionToDisplay:``
    }

    componentDidMount() {

    }

    search = () => {
        axios.get(`http://www.omdbapi.com/?apikey=7831c1e1&s=${this.state.showTitle}&page=${this.state.resultPage}`).then((res) => {
            console.log(res)
            this.setState({
                movies: res.data.Search,
                results: res.data.totalResults
            })
        })
    }
    searchShow = (e) => {
        e.preventDefault();
        this.setState({
            exceptionToDisplay:``,
            resultPage: 1,
            showSpecified:true
        }, () => {
            this.search();
        })
    }

    nextPage = (e) => {
        e.preventDefault();
        if (this.state.resultPage * 10 < this.state.results) {
            this.setState({
                exceptionToDisplay:``,
                resultPage: this.state.resultPage + 1,
            }, () => {
                this.search();
            })
        }else{
            this.setState({
                exceptionToDisplay:`no more pages`
            })
        }
    }

    lastPage = (e) => {
        e.preventDefault();
        if (this.state.resultPage!==1) {
            this.setState({
                exceptionToDisplay:``,
                resultPage: this.state.resultPage - 1,
            }, () => {
                this.search();
            })
        }
    }

    changeFilmInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            showSpecified:false
        })
    }

    render() {
        const exceptionToRender=this.state.exceptionToDisplay?(<div><p>{this.state.exceptionToDisplay}</p></div>):(null)
        
        const showList=this.state.movies.length?(this.state.movies.map(movie =>{
            return(
                <div key={movie.imdbID}>
                    <div>
                        <span>{movie.Title}</span>
                        <img src={movie.Poster} alt=""/>

                    </div>
                </div>
            )
        })):(
            <div> No movies yet</div>
        )
        return (
            <div>
                <p>browse</p>
                <form>
                    <label htmlFor="showTitle">search your film</label>
                    <input type="text" id="showTitle" onChange={this.changeFilmInput} />
                    <button onClick={this.searchShow}>Search</button>
                </form>
                {showList}
                <button disabled={!this.state.showSpecified} onClick={this.lastPage}>Previous Page</button>
                <button disabled={!this.state.showSpecified} onClick={this.nextPage}>Next Page</button>
                {exceptionToRender}
            </div>
        )
    }
}

export default Browse;