import { useEffect, useState } from "react"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useParams } from "react-router-dom"


const SingleMovie = ()=>{
    const params = useParams()
    let id = params.imdbID 
    let [movieData, setMovieData] = useState(null)


const FetchMovie = async (id) => {
        try {
            const resolve = await fetch('http://www.omdbapi.com/?apikey=1257858b&i='+id)
            const movie = await resolve.json()
            setMovieData(movie)
            movieData = movie
            console.log(movie)
            console.log(movieData)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        FetchMovie(id)
    },[id])
    // return(<div></div>)
    if (movieData !== null){
return (
       
            <Container>
                <Row>
            <Col>
            <h2>{movieData.Title}</h2>
            <div>first aired {movieData.Year}</div>
            <div>Actors: {movieData.Actors}</div>
                </Col>
                <Col style={{height:"48vW"}}>
                <img src={movieData.Poster} height="100%" alt="" />
                </Col>
                <Col><div>Description: </div><div>{movieData.Plot}</div>
                </Col>
                </Row>
           </Container>

       
)}}


export default SingleMovie