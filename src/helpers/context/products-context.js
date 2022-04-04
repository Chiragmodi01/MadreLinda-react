import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from '../reducer/productsReducer';
import { toggleFilterReducer } from '../reducer/toggleFilterReducer';

const ProductsContext = createContext();


function ProductsProvider({ children }) {
    
    const fetchData = async ()=> {
        try {
            const res = await axios.get('/api/products')
            dispatch({ type: 'FETCH_DATA', payload: res.data.products})
            dispatch({ type: 'LOADER'})
        } catch (e) {
            console.error(e);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    const [state, dispatch] = useReducer(productReducer, {
        products: [],
        loader: true,
        wishlistItems: [],
        cartItems: [],
        filteredProducts: [],
        inBag: false,
        initialPrice: 0,
        totalPrice: 0,
        showLogin: false
    })    

    const [toggleFilterState, toggleFilterDispatch] = useReducer(toggleFilterReducer, {
        category: {Jacket: false, Shirts: false, Polos: false, Knitted: false, Beachwear: false},
        material: {Cotton: false, Elastane: false, Linen: false, Flannel: false},
        gender: {Men: false, Women: false},
        rating: {Rating: false, Range: 1},
        price: {Price: false, Range: 2400},
        sortby: {Relevance: true, LowToHigh: false, HighToLow: false}
    })

    return (
        <ProductsContext.Provider value={{state, dispatch, toggleFilterState, toggleFilterDispatch}}>
            { children }
        </ProductsContext.Provider>
    )
}

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };