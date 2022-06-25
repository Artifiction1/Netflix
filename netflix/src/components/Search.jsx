import { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import MovieList from './MovieList'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


class Search extends Component{
    state = {
        Title: "Die Hard"
    }


    render(){
        const MovieName = this.state.Title
        return(
        <Container>
            <Row>
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          value = {this.state.Title}
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
        />
        <Button>Search</Button>
      </InputGroup>
      <Col>
      <MovieList Name = {MovieName}/>
      </Col>
      </Row>
     </Container>
        )
    }
}
export default Search