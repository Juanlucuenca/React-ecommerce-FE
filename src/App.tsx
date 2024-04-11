import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartModal from "./components/CartModal";
import { ThemeProvider } from "./components/Theme-Provider";
import { Checkout, Home, ProductDetail, Products } from "./pages";
import { useState } from "react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => setCartOpen(!cartOpen);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar toggleCart = {toggleCart} />
        {cartOpen && <CartModal isOpen={true}/>}
        <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
          <div className="flex flex-col min-h-screen my-4">
            <Router>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route
                  path="/products/:prodId"
                  element={<ProductDetail />}
                ></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
              </Routes>
            </Router>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
