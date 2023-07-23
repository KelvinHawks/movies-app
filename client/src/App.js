import Register from './components/register/Register';
import './App.css';
import{Router, Route} from 'react-router-dom'
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Register/>
      {/* <Router>
        <Route to='/'><Register/></Route>
        <Router to='/login'><Login/></Router>
      </Router> */}
      
    </div>
  );
}

export default App;
