const isFilterUnchecked = (obj) => Object.values(obj).every((v) => !v)

const filterByCategory = (products, category) => {
  if(isFilterUnchecked(category)) {
    return products
  }
  return products.filter((prod) => category[prod.clothCategory])
}

const filterByMaterial = (products, material) => {
  if(isFilterUnchecked(material)) {
    return products
  }
  return products.filter((prod) => material[prod.clothMaterial])
}

const filterByGender = (products, gender) => {
  if(isFilterUnchecked(gender)) {
    return products
  }
  return products.filter((prod) => gender[prod.gender])
}

const filterByRating = (filterState, products, rating) => {
  if(isFilterUnchecked(rating)) {
    return products
  }
  return products.filter((prod) => {
    return prod.rating >= filterState.rating.Range;
  })
}

const filterByPrice = (filterState, products, price) => {
  if(isFilterUnchecked(price)) {
    return products
  }
  return products.filter((prod) => {
        return prod.price <= filterState.price.Range;
    })
}

const sortByPrice = (filterState, products) => {
  if(filterState.sortby['LowToHigh']) {
    return [...products].sort((a, b) => a.price - b.price)
  } else if(filterState.sortby['HighToLow']) {
    return [...products].sort((a, b) => b.price - a.price)
  } else if(filterState.sortby['Relevance']) {
    return products
  }
    return products
}


export { filterByCategory, filterByMaterial, filterByGender, filterByRating, filterByPrice, sortByPrice };