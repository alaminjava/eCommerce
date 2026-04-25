import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="text-decoration-none text-dark"
    >
      <div className="card h-100 shadow-sm">
        <img
          src={product.image}
          className="card-img-top p-3"
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">
            {product.title.slice(0, 40)}...
          </h6>

          <p className="text-muted small">
            {product.category}
          </p>

          <h5 className="mt-auto">${product.price}</h5>

          <button className="btn btn-primary mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;