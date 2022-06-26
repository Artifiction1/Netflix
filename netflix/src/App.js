import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';

function App() {
  return (
    <div style={{backgroundColor: 'grey'}}>
    <NavBar/>
    <Search NameMovie = 'Die Hard'/>
    <Search NameMovie = 'Harry Potter'/>
    <Search NameMovie = 'Scream'/>
    </div>
  );
}

export default App;
