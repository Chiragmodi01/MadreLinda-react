import "./App.css";
import "./styles/reset/reset.css";
import Header from "./comps/Header";
import ProductsPage from "./pages/ProductsPage";
import WishlistPage from "./pages/WishlistPage";
import PageNotFound from "./pages/PageNotFound";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Routes, Route } from "react-router-dom";
import { scrollToTop } from './utils/scrollToTop';
import Mockman from 'mockman-js';
import Footer from "./comps/Footer";
import { useProducts } from "./helpers/context/products-context";

function App( ) {

  const { state } = useProducts();
  scrollToTop();

  return (
    <div className={state.showLogin ? "App shortApp" : "App"}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/mock" element={<Mockman />} />
        <Route path = '*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
