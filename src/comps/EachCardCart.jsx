import React, { useState, useReducer } from 'react'
import '../styles/utils/utils.css'
import '../styles/card/verticalCard.css'
import '../styles/card/horizontalCard.css'
import { FiHeart } from 'react-icons/fi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useProducts } from '../helpers/context/products-context';

function EachCard({ product }) {

    const { dispatch } = useProducts();

    const [showImgPlaceholder, setShowImgPlaceholder] = useState(true);
    const [showImgErrorPlaceholder, setShowImgErrorPlaceholder] = useState(false);

  return (
    <div className="each-card-wrapper hr-card">
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
            <p className="card-badge">{product.category}</p>
            <p className="card-qty">
              <AiOutlineMinusSquare size='1.5em' className='card-qty-icon cursor-pointer'
              onClick={() => dispatch({ type: 'DECREASE_QTY', payload: {product: product}})}/>
              {product.qty}
              <AiOutlinePlusSquare size='1.5em' className='card-qty-icon cursor-pointer'
              onClick={() => dispatch({ type: 'INCREASE_QTY', payload: {product: product, charges: 20}})}/>
              </p>
            <button className="btn-add-to-cart btn-fat btn-hover"
             onClick={() => dispatch({ type: 'MOVE_TO_WISHLIST', payload: {product: product, charges: 20}})}
             >Move to Wishlist</button>
            <button className="btn-add-to-cart btn-fat btn-hover"
             onClick={() => dispatch({ type: 'ADD_TO_BAG', payload: {product: product, charges: 20}})}
             >Remove from Bag</button>
        </div>
    </div>
  )
}

export default EachCard