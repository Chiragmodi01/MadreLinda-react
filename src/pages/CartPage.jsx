import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useProducts } from '../helpers/context/products-context';
import { RiShareBoxFill } from 'react-icons/ri';
import '../styles/cartPage/cartPage.css';
import '../styles/header/header.css';

import EachCardCart from '../comps/EachCardCart';

function CartPage() {

  const { state } = useProducts();

  let navigate = useNavigate();

  return (
    <div>
      <div className="collection-header">
        <p className="collection-header_title">Cart</p>
        <p className="collection-header_subtitle">({state.cartItems.length})</p>
      </div>

      <div className="cartPage">
        <main className="cartPage_products">
        {state.cartItems.length === 0 ?
            <div className='empty-page-err err-cart'>
            <p> Bag is Empty... </p>
            <button onClick={() => navigate("../products", { replace: true })} className='btn-fat btn-hover cursor-pointer'>Go to Products Page</button>
            </div>
            :
            state.cartItems.map((product) => {
              return (
                <EachCardCart key={product._id} product={product} />
              )
            })
          }       
        </main>
        <div className="cartPage_price-details">
          <div className="cartPage_apply-voucher-wrapper">
            <input type="text" className="cartPage_apply-voucher-input" placeholder="14 digit voucher code" />
            <button className="cartPage_apply-voucher-action btn-hover">Apply</button>
          </div>
          <div className="cartPage_price-details-wrapper">
              <h5 className="price_details-title">Price Details ({state.cartItems.length} item)</h5>
          </div>
          <div className="price-details_info-wrapper">
              <div className="price-details_info-each">
                  <p className="price-details_info-title">Initial Price</p>
                  <p className="price-details_info-digit">${state.initialPrice}</p>
              </div>
              <div className="price-details_info-each">
                  <p className="price-details_info-title">Discount on Price</p>
                  <p className="price-details_info-digit">- $0</p>
              </div>
              <div className="price-details_info-each">
                  <p className="price-details_info-title">Voucher Discount</p>
                  <p className="price-details_info-digit">- $0</p>
              </div>
              <div className="price-details_info-each">
                  <p className="price-details_info-title">Delivery Charges</p>
                  <p className="price-details_info-digit">${state.cartItems.length === 0 ? 0 : 20 * state.cartItems.length}</p>
              </div>
              <div className="price-details_info-each total">
                  <p className="price-details_info-title total">Total Amount</p>
                  <p className="price-details_info-digit">${state.totalPrice}</p>
              </div>
          </div>
          <button className="price-details-action-place btn-hover">Place your order</button>
          <button className="price-details-action-place btn-hover">
            <RiShareBoxFill size="1.3em" />
          Share your cart</button>
          </div>
      </div>  
    </div>
  )
}

export default CartPage