import './App.css';
import Home from './Home'
import React from 'react';
import Header from './Header'
import Footer from './Footer'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="search" element ={<SearchPage/>}>
            
           </Route>
          <Route path="/"element ={<Home/>}>
            
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
