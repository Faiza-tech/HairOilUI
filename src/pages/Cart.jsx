import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
//import "./Cart.css";
import styles from "./Cart.module.css";


const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className={styles["cart-page"]}>
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className={styles["empty-cart"]}>
          <FaShoppingCart className={styles["empty-cart-icon"]} />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className={styles["cart-items-wrapper"]}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles["cart-item"]}>
              <img src={item.image} alt={item.title} />

              <div className={styles["cart-item-details"]}>
                <h3>{item.title}</h3>

                <p className={styles.price}>
                  ₹{item.price.toLocaleString("en-PK")}
                </p>

                <p className={styles.subtotal}>
                  Subtotal: ₹
                  {(item.price * item.quantity).toLocaleString("en-PK")}
                </p>

                <div className={styles.qtyControls}>
                  <button onClick={() => decreaseQty(item.id)} className={styles.qtyBtn}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className={styles.qtyBtn}>+</button>
                </div>

                <button
                  className={styles.remove}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}


          <div className={styles["cart-total"]}>
            <h2>Total: ₹{total.toLocaleString("en-PK")}</h2>
            <p className={styles["order-info"]}>
              To place your order, please call us at{" "}
              <strong>+1-234-567-8901</strong>
              <br />
              or email <strong>orders@example.com</strong>.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};


export default Cart;
