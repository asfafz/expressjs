import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Body from './Body.js'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Dashboard';
import { Browserrouter, Route ,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Browserrouter>
        <Header />
        <Route path='/' component={Body} exact />
        <Route path='/dashboard' component={Dashboard} exact />
      </Browserrouter>

    </div>
  );
}

export default App;

