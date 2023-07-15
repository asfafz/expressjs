import logo from './logo.svg';
import './App.css';
import Grid from './Grid.js'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Nav from './Nav.js'
import Body from './Body.js'
import Footer from './Footer.js'
import MyKendo from './MyKendo';
function App() {
  return (
    <div className="App">
     <Nav />
     <MyKendo />
  <Body/>
  <Footer />
    </div>
  );
}

export default App;
