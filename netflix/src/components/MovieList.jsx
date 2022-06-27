import MovieCard from "./MovieCard";
import Container from 'react-bootstrap/Container';
import { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

class MovieList extends Component {
    state = {
        MoviesList: undefined
    }

    componentDidMount = () => {
        console.log("I Mounted")
        this.FetchMovies()
    }

    FetchMovies = async () => {
        console.log("it ran")
        const MovieName = this.props.Name
        try {
            console.log(MovieName)
            const resolve = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=1257858b&s=' + MovieName,)
            const Movies = await resolve.json()
            await this.setState({ MoviesList: Movies.Search })
        }
        catch (error) {
            console.log(error)
        }
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.Name !== this.props.Name){
            this.FetchMovies()
            console.log("updated")
        }
    }


    render() {
        if (this.state.MoviesList !== undefined) {
            return (
                <Row>
                    {this.state.MoviesList.map(movie => <MovieCard movies={movie} />)}

                </Row>
            )
        }
        else {
            console.log("wait")
            return(
            <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
        </Spinner>)
        }

    }
}
export default MovieList