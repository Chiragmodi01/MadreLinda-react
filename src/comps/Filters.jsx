import React, { useReducer, useState } from 'react'
import '../styles/productspage/filters.css'
import '../styles/utils/utils.css'
import { IoIosArrowDown } from 'react-icons/io';
import { ShowFilterReducer } from '../helpers/reducer/ShowFilterReducer';
import { useProducts} from '../helpers/context/products-context';

function Filters() {

    const {toggleFilterState, toggleFilterDispatch} = useProducts();

    const priceRangeValue = [300, 2400];
    const ratingRangeValue = [1, 5];

    const [showFilterState, showFilterDispatch] = useReducer(ShowFilterReducer, {
        category: false,
        material: false,
        gender: false,
        rating: false,
        price: false,
        sort: false
    })

  return (
        <div className="productPageFilters">
            <div className="productPage_filters-container">
                <div className="productPage-filters_section section-left">
                    <div className="productPage_filters_pill-container category"
                        onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_CATEGORY'})}>
                        <p className="filters_pill-name cursor-pointer">Category</p>
                        <IoIosArrowDown size="1.2em" className={showFilterState.category ? "filter_arrow-up" : "filter_arrow-down"}/>
                    </div>
                    <div className="productPage_filters_pill-container material"
                        onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_MATERIAL'})}>
                        <p className="filters_pill-name cursor-pointer">Material</p>
                        <IoIosArrowDown size="1.2em" className={showFilterState.material ? "filter_arrow-up" : "filter_arrow-down"}/>
                    </div>
                    <div className="productPage_filters_pill-container gender"
                        onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_GENDER'})}>
                        <p className="filters_pill-name cursor-pointer">Gender</p>
                        <IoIosArrowDown size="1.2em" className={showFilterState.gender ? "filter_arrow-up" : "filter_arrow-down"}/>
                    </div>
                    <div className="productPage_filters_pill-container rating"
                        onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_RATING'})}>
                        <p className="filters_pill-name cursor-pointer">Rating</p>
                        <IoIosArrowDown size="1.2em" className={showFilterState.rating ? "filter_arrow-up" : "filter_arrow-down"}/>
                    </div>
                    <div className="productPage_filters_pill-container price"
                        onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_PRICE'})}>
                        <p className="filters_pill-name cursor-pointer">Price</p>
                        <IoIosArrowDown size="1.2em" className={showFilterState.price ? "filter_arrow-up" : "filter_arrow-down"}/>
                    </div>
                </div>
                <div className="productPage-filters_section section-right">
                    <div className="productPage_filters_pill-container clear-filter">
                        <p className="filters_pill-name cursor-pointer" onClick={() => toggleFilterDispatch({type: 'CLEAR_FILTERS'})}>Clear</p>
                    </div>
                    <div className="productPage_filters_pill-container sort">
                        <div className="filters_pill_sort-wrapper" onClick={() => showFilterDispatch({ type : 'SHOW_FILTER_SORT'})}>
                            <div className="productPage_filters_pill-container sort-by">
                                <p className="filters_pill-name cursor-pointer">Sort By</p>
                                <IoIosArrowDown size="1.2em" className={showFilterState.sort ? "filter_arrow-up" : "filter_arrow-down"}/>
                            </div>
                            <p className="filters_pill_sort-type">Relevance</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productPage_eachFilter-container">
                <div className={showFilterState.category ? "eachFilter_wrapper FilterCategory" : " eachFilter_wrapper FilterCategory no-display"}>
                    <div className="filters_eachFilter filter-category">
                        <label htmlFor="category-1">
                            <input type="checkbox" id="category-1" checked={toggleFilterState.category['Shirts']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_CATEGORY_SHIRTS'})}/>
                            Shirts (19)
                        </label>
                        <label htmlFor="category-2">
                            <input type="checkbox" id="category-2" checked={toggleFilterState.category['Polos']} 
                                 onChange={() => toggleFilterDispatch({type: 'CHECK_CATEGORY_POLOS'})}/>
                            Tshirts and Polos (10)
                        </label>
                        <label htmlFor="category-3" >
                            <input type="checkbox" id="category-3" checked={toggleFilterState.category['Jacket']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_CATEGORY_JACKET'})}/>
                            Jacket (6)
                        </label>
                        <label htmlFor="category-4">
                            <input type="checkbox" id="category-4" checked={toggleFilterState.category['Beachwear']} 
                                 onChange={() => toggleFilterDispatch({type: 'CHECK_CATEGORY_BEACHWEAR'})}/>
                            Beachwear (10)
                        </label>
                        <label htmlFor="category-5" >
                            <input type="checkbox" id="category-5" checked={toggleFilterState.category['Knitted']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_CATEGORY_KNITTED'})}/>
                            Knitted (6)
                        </label>
                    </div>
                </div>
                <div className={showFilterState.material ? "eachFilter_wrapper FilterMaterial" : " eachFilter_wrapper FilterMaterial no-display"}>
                    <div className="filters_eachFilter filter-material">
                        <label htmlFor="material-1">
                            <input type="checkbox" id="filter-material material-1" checked={toggleFilterState.category['Flannel']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_MATERIAL_FLANNEL'})}/>
                            Flannel (19)
                        </label>
                        <label htmlFor="material-2">
                            <input type="checkbox" id="filter-material material-2" checked={toggleFilterState.category['Cotton']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_MATERIAL_COTTON'})}/>
                            Cotton (10)
                        </label>
                        <label htmlFor="material-3">
                            <input type="checkbox" id="filter-material material-3" checked={toggleFilterState.category['Elastane']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_MATERIAL_ELASTANE'})}/>
                            Elastane (6)
                        </label>
                        <label htmlFor="material-3">
                            <input type="checkbox" id="filter-material material-3" checked={toggleFilterState.category['Linen']}
                                onChange={() => toggleFilterDispatch({type: 'CHECK_MATERIAL_LINEN'})}/>
                            Linen (6)
                        </label>
                    </div>
                </div>  
                <div className={showFilterState.gender ? "eachFilter_wrapper FilterGender" : " eachFilter_wrapper FilterGender no-display"}>
                    <div className="filters_eachFilter filter-gender">
                        <label htmlFor="gender-1" className='cursor-pointer'>
                            <input type="checkbox" className='cursor-pointer'  id="filter-gender gender-1" checked={toggleFilterState.gender['Men']}
                            onChange={() => toggleFilterDispatch({type: 'CHECK_GENDER_MEN'})}/>
                            Men
                        </label>
                        <label htmlFor="gender-2" className='cursor-pointer'>
                            <input type="checkbox" className='cursor-pointer'  id="filter-gender gender-2" checked={toggleFilterState.gender['Women']}
                            onChange={() => toggleFilterDispatch({type: 'CHECK_GENDER_WOMEN'})}/>
                            Women
                        </label>
                    </div>
                </div>
                <div className={showFilterState.rating ? "eachFilter_wrapper FilterRating" : " eachFilter_wrapper FilterRating no-display"}>
                    <form className="filters_eachFilter filter-price" >
                        <label className='filter-price-label label-min' htmlFor="filter-price">{ratingRangeValue[0]} sStar or more</label>
                        <input type="range" min={ratingRangeValue[0]} max={ratingRangeValue[1]} value={toggleFilterState.rating.Range} id="filter-price" name="range"
                        onChange={(e) => toggleFilterDispatch({type: 'CHECK_SORT_RATING', payload: {range: e.target.value}})}
                        />
                        <label className='filter-price-label label-max' htmlFor="filter-price">{toggleFilterState.rating.Range} Star or more</label>
                        <output className='filter-price-output' htmlFor="filter-price" name="output">{toggleFilterState.rating.Range} Star or more</output>
                    </form>
                </div> 
                <div className={showFilterState.price ? "eachFilter_wrapper FilterPrice" : " eachFilter_wrapper FilterPrice no-display"}>
                    <form className="filters_eachFilter filter-price" >
                        <label className='filter-price-label label-min' htmlFor="filter-price">${priceRangeValue[0]}</label>
                        <input type="range" min={priceRangeValue[0]} max={priceRangeValue[1]} value={toggleFilterState.price.Range} id="filter-price" name="range"
                        onChange={(e) => toggleFilterDispatch({type: 'CHECK_SORT_PRICE', payload: {range: e.target.value}})}
                        />
                        <label className='filter-price-label label-max' htmlFor="filter-price">${toggleFilterState.price.Range}</label>
                    </form>
                </div>
                <div className={showFilterState.sort ? "eachFilter_wrapper FilterSort" : " eachFilter_wrapper FilterSort no-display"}>
                    <div className="filters_eachFilter filter-sort">
                        <label htmlFor="sort-1">
                            <input type="radio" name="sort" id="filter-sort sort-1" checked={toggleFilterState.sortby['Relevance']} 
                                onChange={() => toggleFilterDispatch({type: 'CHECK_SORT_RELEVANCE'})}/>
                            Relevance
                        </label>
                        <label htmlFor="sort-2">
                            <input type="radio" name="sort" id="filter-sort sort-2" checked={toggleFilterState.sortby['LowToHigh']} 
                                onChange={() => toggleFilterDispatch({type: 'CHECK_SORT_LOW_TO_HIGH'})}/>
                            Low to High
                        </label>
                        <label htmlFor="sort-3">
                            <input type="radio" name="sort" id="filter-sort sort-3" checked={toggleFilterState.sortby['HighToLow']} 
                                onChange={() => toggleFilterDispatch({type: 'CHECK_SORT_HIGH_TO_LOW'})}/>
                            High to Low
                        </label>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Filters