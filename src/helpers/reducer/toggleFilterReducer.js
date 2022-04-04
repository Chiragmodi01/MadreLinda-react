function toggleFilterReducer(toggleFilterState, action) {

    
    switch (action.type) {
        // category
        case 'CHECK_CATEGORY_JACKET':
            return {
                ...toggleFilterState,
                category: {...toggleFilterState.category, Jacket: !toggleFilterState.category.Jacket},
            }
        case 'CHECK_CATEGORY_POLOS':
            return {
                ...toggleFilterState,
                category: {...toggleFilterState.category, Polos: !toggleFilterState.category.Polos},
            }
        case 'CHECK_CATEGORY_SHIRTS':
            return {
                ...toggleFilterState,
                category: {...toggleFilterState.category, Shirts: !toggleFilterState.category.Shirts},
            }
        case 'CHECK_CATEGORY_KNITTED':
            return {
                ...toggleFilterState,
                category: {...toggleFilterState.category, Knitted: !toggleFilterState.category.Knitted},
            }
        case 'CHECK_CATEGORY_BEACHWEAR':
            return {
                ...toggleFilterState,
                category: {...toggleFilterState.category, Beachwear: !toggleFilterState.category.Beachwear},
            }
        
        // material
        case 'CHECK_MATERIAL_ELASTANE':
            return {
                ...toggleFilterState,
                material: {...toggleFilterState.material, Elastane: !toggleFilterState.material.Elastane},
            }
        case 'CHECK_MATERIAL_COTTON':
            return {
                ...toggleFilterState,
                material: {...toggleFilterState.material, Cotton: !toggleFilterState.material.Cotton},
            }
        case 'CHECK_MATERIAL_LINEN':
            return {
                ...toggleFilterState,
                material: {...toggleFilterState.material, Linen: !toggleFilterState.material.Linen},
            }
        case 'CHECK_MATERIAL_FLANNEL':
            return {
                ...toggleFilterState,
                material: {...toggleFilterState.material, Flannel: !toggleFilterState.material.Flannel},
            }

        // sort
        case 'CHECK_SORT_RELEVANCE':
            return {
                ...toggleFilterState,
                sortby: {...toggleFilterState.sortby, Relevance: true, LowToHigh: false, HighToLow: false},
            }
        case 'CHECK_SORT_LOW_TO_HIGH':
            return {
                ...toggleFilterState,
                sortby: {...toggleFilterState.sortby, LowToHigh: true, HighToLow: false, Relevance: false},
            }
        case 'CHECK_SORT_HIGH_TO_LOW':
            return {
                ...toggleFilterState,
                sortby: {...toggleFilterState.sortby, HighToLow: true, LowToHigh: false, Relevance: false},
            }

        //  sort price
        case 'CHECK_SORT_PRICE':
            return {
                ...toggleFilterState,
                price: {...toggleFilterState.price, Price: true, Range: action.payload.range}
            }
        
        // sort rating
        case 'CHECK_SORT_RATING':
            return {
                ...toggleFilterState,
                rating: {...toggleFilterState.rating, Rating: true, Range: action.payload.range}
            }

        // gender
        case 'CHECK_GENDER_MEN':
            return {
                ...toggleFilterState,
                gender: {...toggleFilterState.gender, Men: !toggleFilterState.gender.Men}
            }
        case 'CHECK_GENDER_WOMEN':
            return {
                ...toggleFilterState,
                gender: {...toggleFilterState.gender, Women: !toggleFilterState.gender.Women}
            }

        // clear filters
        case 'CLEAR_FILTERS':
            return {
                category: {Jeans: false, Polos: false, Shirts: false},
                material: {Leather: false, Cotton: false, Whool: false},
                gender: {Men: false, Women: false},
                sortby: {Relevance: true, LowToHigh: false, HighToLow: false, Price: false},
                rating: {Rating: false, Range: 1},
                price: {Price: false, Range: 2400}
            }

        default:
            return toggleFilterState;
        }
    }
        

export { toggleFilterReducer };