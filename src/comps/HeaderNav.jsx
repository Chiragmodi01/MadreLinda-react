import React, { useState } from 'react'
import '../styles/homepage/header.css'
import { IoSearchOutline } from 'react-icons/io5';
import { BiUser } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { BsBag } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { useProducts } from '../helpers/context/products-context';
import { useNavigate } from "react-router-dom";

function HeaderNav() {

  const { state, dispatch } = useProducts();
    
  const [closePromo, setClosePromo] = useState(false);
  
  const handleClosePromo = ()  => setClosePromo(true);

  let navigate = useNavigate();

  return (
    <div className="header-sticky">
        <nav className="header_main-container">
            <Link to="/">
            <div className="header_main_brand-name" title='Home'>Madré Linda</div>
            </Link>
            <div className="header_main_nav-pills-wrapper">
            <Link to="/products">
                <h5 className="header_main_nav-pill">New In</h5>
                <h5 className="header_main_nav-pill">Women</h5>
                <h5 className="header_main_nav-pill">Men</h5>
                <h5 className="header_main_nav-pill">Trending</h5>
                <h5 className="header_main_nav-pill">Beauty</h5>
            </Link>
            </div>

            <div className="header_main_nav-actions-wrapper">
                <div className="header_main_nav-search-wrapper" title='Search'>
                    <IoSearchOutline size="1.6em" className="icon-magnifying-glass" />
                    <input type="text" placeholder='Search' className='header_main_nav-search-box'/>
                </div>
                <div className="header_main_nav-action-icons-wrapper">
                    <Link to="/profile">
                        <span className="header_main_nav_actions-wrapper">
                            <BiUser size="1.5em" className="header_main_nav-action-icon icon-user" title='Login'/>
                        </span>
                    </Link>
                    <Link to="/wishlist">
                        <span className="header_main_nav_actions-wrapper">
                            <FiHeart size="1.4em"  className="header_main_nav-action-icon icon-wishlist" title='Wishlist'/>
                        </span>
                    </Link>
                    <Link to="/cart">
                        <span className="header_main_nav_actions-wrapper">
                            <BsBag size="1.4em" className="header_main_nav-action-icon icon-bag" title='Shopping-bag'/>
                            <span className="header_main_icon-badge">{state.cartItems.length}</span>
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
        <div className={closePromo ? "closed-promo" : "header_promotional-container"}>
            <p  onClick={() => navigate("../products", { replace: true })} className="header_promotional_text cursor-pointer">Checkout our new in collection</p>
            <IoClose size="1.3em" className="header_promotional_icon-dismiss" onClick={handleClosePromo}/>
        </div>
    </div>
  )
}

export default HeaderNav