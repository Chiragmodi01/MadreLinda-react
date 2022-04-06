import React from 'react'
import { useNavigate } from "react-router-dom";
import { useProducts } from '../helpers/context/products-context';

import EachCard from '../comps/EachCard';

function WishlistPage() {

  const { state } = useProducts();

  let navigate = useNavigate();

  return (
    <div>
        <div className="collection-header">
          <p className="collection-header_title">Wishlist</p>
          <p className="collection-header_subtitle">({state.wishlistItems.length})</p>
        </div>
        <div className="ProductsPage">
          <main className="wishlist_products">
           {state.wishlistItems.length === 0 ?
            <div className='empty-page-err err-cart'>
            <p> Wishlist is Empty... </p>
            <button onClick={() => navigate("../products", { replace: true })} className='btn-fat btn-hover cursor-pointer'>Go to Products Page</button>
            </div>
              :
              state.wishlistItems.map((product) => {
                return (
                  <EachCard key={product._id} product={product} />
                )
              })
            }       
         </main>
        </div>  
    </div>
  )
}

export default WishlistPage