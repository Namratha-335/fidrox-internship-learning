
function ProductDetails({ product }) {
  if (!product) {
    return <p>No product selected.</p>
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="200"
      />

      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>

      <button onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  )
}

export default ProductDetails
