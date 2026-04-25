import { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navBar";
import AddProduct from "./components/AddProduct";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  return (
    <Router>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <div className="container mt-4">
              <div className="row">
                {products.map(product => (
                  <div key={product.id} className="col-md-3 mb-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductPage products={products} />}
        />

        <Route
          path="/add-product"
          element={<AddProduct setProducts={setProducts} />}
        />

      </Routes>

    </Router>
  );
}

export default App;