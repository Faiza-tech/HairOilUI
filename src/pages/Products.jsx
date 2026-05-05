// src/pages/Products.jsx
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";
import { productsData } from "../data/productsData";

const Products = () => {

  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 10;

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setViewMode("grid");
    }
  }, []);


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setViewMode("grid");
    }

    // simulate API loading
    setTimeout(() => {
      setIsLoading(false);
    }, 800);

  }, []);


  const indexLast = currentPage * productsPerPage;
  const indexFirst = indexLast - productsPerPage;

  const currentProducts = productsData.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(productsData.length / productsPerPage);


  return (
    <section className="products-page">
      <h1>Our Hair Oil Products</h1>

      {/* View toggle + showing results */}
      <div className="view-toggle-bar">
        {/* Left side: Showing results */}
        <div className="show-results">
          <h6>
            Showing {indexFirst + 1} - {Math.min(indexLast, productsData.length)} of {productsData.length}
          </h6>
        </div>

        {/* Right side: Grid/List toggle */}
        <div className="gl-buttons">
          <button
            className={viewMode === "grid" ? "active" : ""}

            onClick={() => setViewMode("grid")}
            title="Grid View"
          >
            <i className="fas fa-th"></i>
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
            title="List View"
          >
            <i className="fas fa-list-ul"></i>
          </button>
        </div>
      </div>


      {/* Products */}
      <div className={viewMode === "grid" ? "products-grid" : "products-list"}>

        {isLoading ? (
          <div className="loader">Loading products...</div>
        ) : (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              view={viewMode}

            />
          ))
        )}
      </div>


      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (

          < button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active-page" : ""}
          > 
            {i + 1}
          </button>
        ))
        }
      </div >


    </section >
  );
};

export default Products;


