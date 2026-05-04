import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // const [cartItems, setCartItems] = useState([]);

    // 👇 Load saved cart on first render
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);




    // ADD ITEM
    /* const addToCart = (product) => {
         setCartItems((prev) => {
             const existing = prev.find(
                 (item) =>
                     item.id === product.id &&
                     item.size === product.size
             );
 
             if (existing) {
                 return prev.map((item) =>
                     item.id === product.id && item.size === product.size
                         ? { ...item, quantity: item.quantity + 1 }
                         : item
                 );
             }
 
             return [...prev, { ...product, quantity: 1 }];
         });
     };*/
  const addToCart = (product) => {
  setCartItems((prev) => {
    const existing = prev.find(
      (item) => item.id === product.id
    );

    if (existing) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

const increaseQty = (id) => {
  setCartItems(prev =>
    prev.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (id) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};

const removeFromCart = (id) => {
  setCartItems(prev =>
    prev.filter(item => item.id !== id)
  );
};


    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            increaseQty,
            decreaseQty
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
