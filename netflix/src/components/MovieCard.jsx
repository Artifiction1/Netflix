import { Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
class MovieCard extends Component {
    render(){
  return (
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.movies.Poster} />
      <Card.Body>
        <Card.Title>{this.props.movies.Title}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
  );
}}

export default MovieCard;