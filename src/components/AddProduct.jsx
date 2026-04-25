import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct({ setProducts }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price)
    };

    // Add to existing products
    setProducts((prev) => [...prev, newProduct]);

    // Go back to home
    navigate("/");
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-white">

        <input
          type="text"
          name="title"
          placeholder="Product Title"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="form-control mb-3"
          rows="4"
          onChange={handleChange}
          required
        />

        <button className="btn btn-success w-100">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default AddProduct;