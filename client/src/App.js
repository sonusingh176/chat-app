import './App.css';
import {BrowserRouter as BroweserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false}/>
     <BroweserRouter>
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
        </BroweserRouter>
    </div>
  );
}

export default App;
