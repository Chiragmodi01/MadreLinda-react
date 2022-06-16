import React, { useState } from "react";
import { IoClose, BsBag, FiHeart, BiUser } from "../../utils/getIcons";
import { Link } from "react-router-dom";
import { useProducts } from "../../helpers/context/products-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function HeaderNav() {
  const { state } = useProducts();

  const [closePromo, setClosePromo] = useState(false);

  const handleClosePromo = () => setClosePromo(true);

  let navigate = useNavigate();

  const toastLogin = () => {
    !state.isLoggedIn && toast.warning("Please Login First!")
  }

  return (
    <div className="header-sticky">
      <nav className="header_main-container">
        <Link to="/">
          <div className="header_main_brand-name" title="Home">
            Madré Linda
          </div>
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
          <div className="header_main_nav-action-icons-wrapper">
            <Link to="/profile">
              <span className="header_main_nav_actions-wrapper">
                <BiUser
                  size="1.5em"
                  className="header_main_nav-action-icon icon-user"
                  title="Login"
                />
              </span>
            </Link>
            <Link to={state.isLoggedIn ? '/wishlist' : '/profile'} onClick={toastLogin}>
              <span className="header_main_nav_actions-wrapper">
                <FiHeart
                  size="1.4em"
                  className="header_main_nav-action-icon icon-wishlist"
                  title="Wishlist"
                />
              </span>
            </Link>
            <Link to={state.isLoggedIn ? '/cart' : '/profile'} onClick={toastLogin}>
              <span className="header_main_nav_actions-wrapper">
                <BsBag
                  size="1.4em"
                  className="header_main_nav-action-icon icon-bag"
                  title="Shopping-bag"
                />
                <span className="header_main_icon-badge">
                  {state.cartItems.length}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <div
        className={closePromo ? "closed-promo" : "header_promotional-container"}
      >
        <p
          onClick={() => navigate("../products", { replace: true })}
          className="header_promotional_text cursor-pointer"
        >
          Checkout our new in collection
        </p>
        <IoClose
          size="1.3em"
          className="header_promotional_icon-dismiss"
          onClick={handleClosePromo}
        />
      </div>
    </div>
  );
}

export default HeaderNav;
