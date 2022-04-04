import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/utils/utils.css'
import '../styles/card/verticalCard.css'
import { FiHeart } from 'react-icons/fi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useProducts } from '../helpers/context/products-context';

function EachCard({ product }) {

  let navigate = useNavigate();

  const { dispatch } = useProducts();

  const [showImgPlaceholder, setShowImgPlaceholder] = useState(true);
  const [showImgErrorPlaceholder, setShowImgErrorPlaceholder] = useState(false);

  return (
    <div className="each-card-wrapper">
        <div className="each-card-top">
        {
            showImgPlaceholder && <div className="productImg-placeholder"></div>
            }                    {
            (!product.image1 || showImgErrorPlaceholder) && <div className="showErrorDiv">404   Image not found!</div>
            }
            <LazyLoadImage onError={() => setShowImgErrorPlaceholder(true)} afterLoad={() => setShowImgPlaceholder(false)} effect="opacity" src={product.image1} alt="product-img" className="card-img"/>
            <FiHeart size="1.5rem" className={product.fillHeart ? "heart-filled cursor-pointer" : "each-card_img-overlay icon-heart cursor-pointer"} 
            onClick={() => dispatch({ type: 'ADD_TO_WISHLIST', payload: {product: product}})}
            />
            <IoIosArrowBack size="1.5rem" className="each-card_img-overlay icon-arrow arrow-left"/>
            <IoIosArrowForward size="1.5rem" className="each-card_img-overlay icon-arrow arrow-right"/>
        </div>
        <div className="each-card-section-bottom">
            <p className="card-desc">{product.title}</p>
            <p className="card-price">${product.price}</p>
            <div className="card-collection-rating">
              <p className="card-badge">{product.collection}</p>
              <p className="card-badge">
                {[...Array( product.rating)].map((el, index) => <BsStarFill fill="#d1d1d1" className='star-filled' key={index} size="1em"/>)}
                {[...Array(5 - product.rating)].map((el, index) => <BsStar fill="#d1d1d1" key={index} size="1em"/>)}
              </p>
            </div>
            <button className="btn-add-to-bag btn-long btn-hover"
             onClick={() => product.inBag ? navigate("../cart", { replace: true }) : dispatch({ type: 'ADD_TO_BAG', payload: {product: product, charges: 20}}) }
             >{product.inBag ? 'Go to Bag' : 'Add to Bag'}</button>
        </div>
    </div>
  )
}

export default EachCard