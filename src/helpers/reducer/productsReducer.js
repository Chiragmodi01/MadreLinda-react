const productReducer = (state, action) => {

    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, products: action.payload }
        case 'LOADER':
            return { ...state, loader: false }
        case 'ADD_TO_WISHLIST':

            if (checkExistingInWishlist(state, action.payload.product)) {
                return {
                    ...state,
                    products: isFillHeart(state.products, false, action.payload.product),
                    cartItems: isFillHeart(state.cartItems, false, action.payload.product),
                    wishlistItems: removeCurrent(state.wishlistItems, action.payload.product)
                }
            } else  {
                return {
                    ...state,
                    products: isFillHeart(state.products, true, action.payload.product),
                    cartItems: isFillHeart(state.cartItems, true, action.payload.product),
                    wishlistItems: [ ...state.wishlistItems, {...action.payload.product, fillHeart: true}]
                }
            }

        case 'MOVE_TO_WISHLIST':

            if (checkExistingInWishlist(state, action.payload.product)) {
                return {
                    ...state,
                    products: isInBag(state.products, false, action.payload.product),
                    wishlistItems: isInBag(state.wishlistItems, false, action.payload.product),
                    cartItems: removeCurrent(state.cartItems, action.payload.product)
                }
            } else  {
                return {
                    ...state,
                    products: fillHeartAndIsInBag(state.products, action.payload.product), 
                    // fillHeartAndIsInBag(state.products, false action.payload.product),
                    cartItems: removeCurrent(state.cartItems, action.payload.product),
                    wishlistItems: [ ...state.wishlistItems, {...action.payload.product, fillHeart: true}],
                    initialPrice: state.initialPrice - (action.payload.product.price * action.payload.product.qty),
                    totalPrice: state.totalPrice - action.payload.charges - (action.payload.product.price * action.payload.product.qty)
                }
            }

        case 'ADD_TO_BAG':

        if (checkExistingInCart(state, action.payload.product)) {
            return {
                ...state,
                products: isInBag(state.products, false, action.payload.product),
                wishlistItems: isInBag(state.wishlistItems, false, action.payload.product),
                cartItems: removeCurrent(state.cartItems, action.payload.product),
                initialPrice: state.initialPrice - (action.payload.product.price * action.payload.product.qty),
                totalPrice: state.totalPrice - action.payload.charges - (action.payload.product.price * action.payload.product.qty)
            }
        } else  {
            return {
                ...state,
                products: isInBag(state.products, true, action.payload.product),
                wishlistItems: isInBag(state.wishlistItems, true, action.payload.product),
                cartItems: [ ...state.cartItems, {...action.payload.product}],
                initialPrice: state.initialPrice + (action.payload.product.price * action.payload.product.qty),
                totalPrice: state.totalPrice + action.payload.charges + (action.payload.product.price * action.payload.product.qty)
            }
        }

        case 'GO_TO_CART':
            return navigateTo("/cart")

        case 'INCREASE_QTY':
            return {
                ...state,
                cartItems: increaseQty(state.cartItems, action.payload.product),
                initialPrice: increaseInitialPrice(state.initialPrice, action.payload.product),
                totalPrice: increaseTotalPrice(state.totalPrice, action.payload.product)
            }

        case 'DECREASE_QTY':
            return {
                ...state,
                cartItems: decreaseQty(state.cartItems, action.payload.product),
                initialPrice: decreaseInitialPrice(state.initialPrice, action.payload.product),
                totalPrice: decreaseTotalPrice(state.totalPrice, action.payload.product, action.payload.charges)
            }
        case 'SHOW_LOGIN':
            return {
                ...state,
                showLogin: action.payload
            }

        default:
            return state;
    }
}

const checkExistingInWishlist = (state, clickedProduct) => {
    return state.wishlistItems.some((item) => item.id === clickedProduct.id)
}
const checkExistingInCart = (state, clickedProduct) => {
    return state.cartItems.some((item) => item.id === clickedProduct.id)
}

const isFillHeart = (arr, boolean, product) => {
    return arr.map((item) => {
        return item.id === product.id ? {...item, fillHeart: boolean} : item
    })
}
const isInBag = (arr, boolean, product) => {
    return arr.map((item) => {
        return item.id === product.id ? {...item, inBag: boolean} : item
    })
}

const increaseQty = (arr, product) => {
    return arr.map((item) => {
        return item.id === product.id ? {...item, qty: item.qty+1} : item
    })
}

const decreaseQty = (arr, product) => {
    return arr.map((item) => {
        return item.id === product.id ? {...item, qty: item.qty <= 1 ? item.qty === 1 : item.qty-1} : item
    })
}

const increaseInitialPrice = ( state, product) => {
    return state + (product.price * 1)
}

const decreaseInitialPrice = ( state, product) => {
    return state - (product.price * 1)
}

const increaseTotalPrice = ( state, product) => {
    return state + (product.price * 1)
}

const decreaseTotalPrice = ( state, product, charges) => {
    return state - (product.price * 1) - (product.qty > 1 ? 0 : charges)
}

const removeCurrent = (arr, product) => {
    return arr.filter((item) => {
        return item.id !== product.id
    })
}

const fillHeartAndIsInBag  = (products, action) => {
    return products.map((item) => {
        return item.id === action.id ? {...item, inBag: false, fillHeart: true} : item
    })
}

export { productReducer };