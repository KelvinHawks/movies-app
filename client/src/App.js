import Register from './components/register/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
          <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
