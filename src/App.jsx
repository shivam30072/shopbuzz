import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import axios from 'axios'

const App = () => {

const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);


const fetchProducts  = async () => {
  
   try{
    const response = await axios.get('https://fakestoreapi.com/products');
    const data = await response.data;
    setProducts(data);
    
   }
   catch(error){
    console.log(error);
   }
  
}   

useEffect(() => {
  fetchProducts();
  
}, [])




  return (
   <Routes>
    <Route path='/' element = {<Home products = {products} cart = {cart} setCart = {setCart}/>}/>
    <Route path='/cart' element = {<Cart cart = {cart} setCart = {setCart}/>}/>
   </Routes>
  )
}

export default App