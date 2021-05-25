import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import product from './components/Product/product';
import Shops from './components/Shops/Shops';




function App() {
  return (
    <div >
     <Header></Header>
     <Shops></Shops>
     <product></product>
    </div>
  );
}

export default App;
