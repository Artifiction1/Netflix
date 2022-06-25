import MovieCard from "./MovieCard";
import Container from 'react-bootstrap/Container';
import { Component} from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MovieList extends Component{
    state = {
        MoviesList: []
    }

componentDidMount = () => {
    console.log("I Mounted")
    this.FetchMovies()
}

FetchMovies = async () =>{
const MovieName = this.props.Name
try{
console.log(MovieName)
const resolve = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=1257858b&s='+MovieName,)
const Movies = await resolve.json()
console.log(Movies.Search)
await this.setState({MoviesList: Movies.Search})}
catch(error){
    console.log(error)
}
}
    render(){
        if (this.state.MoviesList.length > 0){
            console.log("it's done")
            console.log(this.state.MoviesList)
            return(
                <Container>
                    <Row>
                        {this.state.MoviesList.map(movie => <MovieCard movies = {movie}/>)}
                        
                    </Row>
                </Container>
            )}
        else{
            console.log("wait")
        }
        
    }
}
export default MovieList