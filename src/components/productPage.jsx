import { useParams, Link } from "react-router-dom";

function ProductPage({ products }) {
  const { id } = useParams();

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <h2 className="text-center mt-5">
        Product not found
      </h2>
    );
  }

  return (
    <div className="container py-5">

      {/* Back Button */}
      <Link to="/" className="btn btn-outline-secondary mb-4">
        ← Back to Products
      </Link>

      <div className="row g-5 align-items-center bg-white p-4 rounded shadow-sm">

        {/* Image Section */}
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{
              maxHeight: "400px",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Details Section */}
        <div className="col-md-7">

          <span className="badge bg-secondary mb-2">
            {product.category}
          </span>

          <h2 className="fw-bold mb-3">
            {product.title}
          </h2>

          <h3 className="text-success mb-3">
            ${product.price}
          </h3>

          <p className="text-muted">
            {product.description}
          </p>

          <div className="d-flex gap-3 mt-4">

            <button className="btn btn-primary px-4">
              Add to Cart
            </button>

            <button className="btn btn-outline-dark px-4">
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPage;