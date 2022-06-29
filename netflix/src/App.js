import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import NavBarTop from './components/NavBarTop';
import SingleMovie from './components/SingleMovie'

function App() {
  return (
    <BrowserRouter>
    <div style={{backgroundColor: 'grey'}}>
    <NavBarTop/>
    <Routes>
      <Route path="/" element={<div>
    <Search NameMovie = 'Die Hard'/>
    <Search NameMovie = 'Harry Potter'/>
    <Search NameMovie = 'Scream'/>
    </div>}/>
    <Route path='/TvShows'
    element={<div>
      <Search NameMovie = 'Jumanji'/>
      <Search NameMovie = 'Planet'/>
      <Search NameMovie = 'Myth'/>
      </div>}/>
    <Route path='/Search'/>
    <Route path ='/Movie/:imdbID' element={<SingleMovie/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
