
// src/components/ProductCard.jsx
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, image, title, description, price, onImageClick, view }) => {


  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();
  const item = cartItems.find((i) => i.id === id);

  const navigate = useNavigate();


  return (
    <>

      <div className={view === "list" ? styles["list-card"] : styles["product-card"]}>

        <img
          src={image}
          alt={title}
          onClick={() => navigate(`/product/${id}`)}
          loading="lazy"
        />

        <div className={styles["product-info"]}>
          <h3>{title}</h3>
          <p>{description}</p>
          <span className={styles.price}>₹{price}</span>

          {item ? (

            <div className={styles["qty-controls"]}>
              <button onClick={() => decreaseQty(id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(id)}>+</button>
            </div>
          ) : (
            <button className={styles["add-btn"]} onClick={() => addToCart({ id, image, title, description, price })}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

