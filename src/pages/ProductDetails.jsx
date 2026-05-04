
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import styles from "./ProductDetails.module.css";
import { productsData } from "../data/productsData";

const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();

  const product = productsData.find(p => p.id === Number(id));



  // ✅ Accordion state (IMPORTANT)
  const [openSection, setOpenSection] = useState(null);

  if (!product) return <p>Product not found</p>;

  // ✅ simple cart (no size)
  const item = cartItems.find(i => i.id === product.id);



  return (
    <div className={styles.container}>
      {/* TOP SECTION */}
      <div className={styles.topSection}>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <img src={product.image} alt={product.title} />
        </div>

        {/* DETAILS */}
        <div className={styles.details}>
          <h2>{product.title}</h2>

          <p className={styles.price}>₹{product.price}</p>


          {/* CART CONTROLS */}
          {item ? (
            <div className={styles.qtyControls}>
              <button onClick={() => decreaseQty(product.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(product.id)}>+</button>
            </div>
          ) : (
            <button
              className={styles.addBtn}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      {/* DESCRIPTION + FEATURES */}
      <div className={styles.accordion}>

        {/* DESCRIPTION */}
        <div className={styles.section}>
          <div
            className={styles.header}
            onClick={() =>
              setOpenSection(openSection === "desc" ? null : "desc")
            }
          >
            <span>Description</span>
            <span>{openSection === "desc" ? "-" : "+"}</span>
          </div>

          {openSection === "desc" && (
            <p className={styles.content}>
              {product.description}
            </p>
          )}
        </div>

        {/* FEATURES */}
        <div className={styles.section}>
          <div
            className={styles.header}
            onClick={() =>
              setOpenSection(openSection === "features" ? null : "features")
            }
          >
            <span>Features</span>
            <span>{openSection === "features" ? "-" : "+"}</span>
          </div>

          {openSection === "features" && (
            product.features && product.features.length > 0 ? (
              <ul className={styles.content}>
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            ) : (
              <p className={styles.content}>No features available</p>
            )
          )}
        </div>

      </div>

    </div>
  );
};

export default ProductDetails;