import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useProducts } from '../../helpers/context/products-context';
import './cartPage.css';

import {EachCardCart} from '../../comps';

function CartPage() {

  const voucherCode = ["NEOG22", "CHIRAG50", "MLFIRST50"];
  
  const [voucher, setVoucher] = useState('');

  const { state, dispatch } = useProducts();

  let navigate = useNavigate();

  const applyVoucher = (e) => {
    { state.isVoucherApplied ? alert('One voucher already used!') : voucherCode.some((code) => code === voucher) ? dispatch({ type: 'APPLY_VOUCHER', payload: 50}) : alert('Incorrect Voucher code')}
  }


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
            <div className="cartPage-apply-voucher-top">
              <input type="text" className="cartPage_apply-voucher-input" placeholder="apply cupon code here"
              disabled={state.cartItems.length === 0 || state.isVoucherDisabled }
              value={voucher} onChange={(e) => setVoucher(e.target.value)}/>
              <button disabled={state.cartItems.length === 0} className="cartPage_apply-voucher-action btn-hover" onClick={applyVoucher}>{state.isVoucherApplied ? "Applied!" : "Apply"}</button>
            </div>
            <div className="cartPage-apply-voucher-bottom">
              <p className="apply-voucher-bottom-title">Available cupons</p>
              <ul className="apply-voucher-bottom-list">
                {
                  voucherCode.map((voucher) => {
                    return <li key={voucher} className='apply-voucher-bottom-list-item' onClick={(e) => setVoucher(e.target.innerText)}>{voucher}</li>
                  })
                }
              </ul>
            </div>
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
                  <p className="price-details_info-digit">- ${state.voucherPrice}</p>
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
          </div>
      </div>  
    </div>
  )
}

export {CartPage}