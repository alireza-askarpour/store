const sliderDataFilter = (products, category) => {
  const filteredProducts = products.filter((item) => item.category === category)

  const data = filteredProducts.map((item) => {
    return {
      id: item.id,
      brand: item.brand,
      title: item.name,
      price: item.price,
      rating: item.rating,
      image: item.images[0],
      inStock: item.inStock,
      link: `/product/${item.id}`,
    }
  })

  return data
}

export default sliderDataFilter
