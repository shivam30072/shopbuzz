import React from 'react'
import Navbar from './Navbar'
import Products from './Products'

const Home = ({products, cart, setCart}) => {
  return (
    <div className='bg-blue-50'>
        <Navbar />
        <Products products = {products} cart = {cart} setCart = {setCart}/>
    </div>
  )
}

export default Home