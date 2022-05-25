import "./App.css";
import "./styles/reset/reset.css";
import {Header} from "./comps";
import {ProductsPage} from "./pages";
import {WishlistPage} from "./pages";
import {PageNotFound} from "./pages";
import {CartPage} from "./pages";
import {HomePage} from "./pages";
import {ProfilePage} from "./pages";
import { Routes, Route } from "react-router-dom";
import { scrollToTop } from './utils/scrollToTop';
import Mockman from 'mockman-js';
import {Footer} from "./comps";
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
