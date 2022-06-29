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
        Title: this.props.NameMovie
    }
    SearchChange = async (Names) =>{
        this.setState({
            Title: Names
        })
    }
    componentDidUpdate = (prevProps, prevState) => {
      if (prevProps.NameMovie !== this.props.NameMovie){
      this.setState({Title: this.props.NameMovie})}
    }
    render(){
        const MovieName = this.state.Title
        return(
        
            <Row style={{margin: "10px"}}>
        {/*<InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
        <Form.Control
          value = {this.state.Title}
          onChange = {async event => {
            await this.SearchChange(event.target.value)
          }}
          aria-label="Search"
          aria-describedby="inputGroup-sizing-sm"
        />
        <Button>Search</Button>
      </InputGroup>*/}
      <h2 className='col-12 '>{MovieName}</h2>
      <Col>
      <MovieList Name = {MovieName}/>
      </Col>
      </Row>
     
        )
    }
}
export default Search