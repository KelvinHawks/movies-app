import Register from './components/register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';
import Home from './components/homepage/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/homepage' element={<Home/>}/>
          </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
