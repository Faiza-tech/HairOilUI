import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from './components/Footer'
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import './Styles/CommonStyles.css'

import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (

    <div className="app">
    {/**  <CartProvider>*/} 
        <BrowserRouter>
          <Navbar />
            <ScrollToTop />
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
     {/** </CartProvider>*/} 

    </div>
  );
}

export default App;