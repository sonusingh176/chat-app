import './App.css';
import {BrowserRouter as BroweserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './components/protectedRoutes.js';
import Loader from './components/loader.js';
import {useSelector} from "react-redux";



function App() {
    const {loader} = useSelector(state=>state.loaderReducer);
   
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false}/>
      {loader &&  <Loader/>}
     
     <BroweserRouter>
          <Routes>
            
              <Route path="/" element={
                <ProtectedRoutes>
                  <Home/>
                </ProtectedRoutes>
              }></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
        </BroweserRouter>
    </div>
  );
}

export default App;
