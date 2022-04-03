import React, { useState } from 'react'
import '../styles/utils/utils.css'
import '../styles/card/verticalCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useProducts } from '../helpers/context/products-context';

function EachCard({ index }) {
    
    const { state } = useProducts();

  const [showImgPlaceholder, setShowImgPlaceholder] = useState(true);
  const [showImgErrorPlaceholder, setShowImgErrorPlaceholder] = useState(false);

  return (
    <div className="each-card-wrapper each-card-landing-wrapper">
        <div className="each-card-top">
        {
            showImgPlaceholder && <div className="productImg-placeholder"></div>
            }                    {
            (!state.products[Number(index)].image1 || showImgErrorPlaceholder) && <div className="showErrorDiv">404   Image not found!</div>
            }
            <LazyLoadImage onError={() => setShowImgErrorPlaceholder(true)} afterLoad={() => setShowImgPlaceholder(false)} effect="opacity" src={state.products[index].image1} alt="product-img" className="card-img card-img-landing left"/>
        </div>
        <div className="each-card-section-bottom each-card-landing-bottom">
            <p className="card-desc">{state.products[Number(index)].title}</p>
            <p className="card-price">${state.products[Number(index)].price}</p>
        </div>
    </div>
  )
}

export default EachCard