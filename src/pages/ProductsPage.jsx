import React from 'react'
import '../styles/productspage/products.css';
import InfinityLoader from "../assets/gifs/Infinity-loader.svg";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import EachCard from '../comps/EachCard';
import { useProducts } from '../helpers/context/products-context';
import Filters from '../comps/Filters';
import { filterByCategory, filterByMaterial, filterByRating, filterByPrice, sortByPrice, filterByGender } from '../utils/filterUtils';

function ProductsPage( ) {

  const { state, toggleFilterState } = useProducts();

  const filteredCategoryProducts = filterByCategory(state.products, toggleFilterState.category)
  const filteredMaterialProducts = filterByMaterial(filteredCategoryProducts, toggleFilterState.material)
  const filteredGenderProducts = filterByGender(filteredMaterialProducts, toggleFilterState.gender)
  const filteredRatingProducts = filterByRating(toggleFilterState, filteredGenderProducts, toggleFilterState.rating)
  const filteredPriceProducts = filterByPrice(toggleFilterState, filteredRatingProducts, toggleFilterState.price)
  const sortProducts = sortByPrice(toggleFilterState, filteredPriceProducts)

  state.filteredProducts = sortProducts

  return (
    <div>
        <div className="collection-header">
          <p className="collection-header_title">Men</p>
          <p className="collection-header_subtitle">Summer sollection 2022 ({state.filteredProducts.length === 0 ? state.products.length : state.filteredProducts.length})</p>
        </div>
        <Filters />
      <div className="ProductsPage">
        <main className="productPage_products">

        {
          !state.loader ? 
          (
            state.filteredProducts.length === 0 ?
            <h4 className='empty-page-err err-filters'>Oops! Applied filter doesn't match with any of the product, Try using different filters or remove some.</h4>
          : 
          state.filteredProducts.map((product) => {
            return (
              <EachCard key={product._id} product={product} />
            )
          })
          )
          :
          state.loader && <div className='loading-wrapper'>
            <img src={InfinityLoader} alt="infinity-loader"/>
          </div>
        }   

        </main>
      </div>
    </div>
  )
}

export default ProductsPage