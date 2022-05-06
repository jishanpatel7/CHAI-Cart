import { useState,useEffect } from 'react'
import Routers from './Routes/Routes'
import './App.css'

import SimpleBottomNavigation from './components/Navigation';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems]= useState([])
 
  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => item.id === product.id ? 
        {...item, quantity: item.quantity + 1} : item)
      )
  } else {
    setCartItems([...cartItems, {...product, quantity: 1}])
  }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity ===1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item) => item.id === product.id ?
        {...item, quantity: item.quantity - 1} : item)
      )
    }
  }
  
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    //console.log(data)
  };
  

  return (
    <>
    <div className="App">
  
 <Routers 
 products={products}
  cartItems={cartItems}
   handleAddProduct={handleAddProduct}
    handleRemoveProduct={handleRemoveProduct}
 />
    </div>
    <SimpleBottomNavigation cartItems={cartItems}/>
    </>
  )
}

export default App
