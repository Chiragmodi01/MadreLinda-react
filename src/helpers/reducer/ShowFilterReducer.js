const ShowFilterReducer = (showFilterState, action) => {

    switch (action.type) {
        case 'SHOW_FILTER_CATEGORY':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, category: !showFilterState.category}
        case 'SHOW_FILTER_MATERIAL':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, material: !showFilterState.material}
        case 'SHOW_FILTER_GENDER':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, gender: !showFilterState.gender}
        case 'SHOW_FILTER_RATING':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, rating: !showFilterState.rating}
        case 'SHOW_FILTER_PRICE':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, price: !showFilterState.price}
        case 'SHOW_FILTER_SORT':
            return Object.keys(showFilterState).forEach(v => showFilterState[v] = false), { ...showFilterState, sort: !showFilterState.sort}
    
        default:
            return showFilterState;
    }
}

export { ShowFilterReducer };