
import { memo } from 'react'

function ProductCard({ product }) {
  console.log('Rendering product:', product.title)

  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        width="120"
      />

      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  )
}

export default memo(ProductCard)
