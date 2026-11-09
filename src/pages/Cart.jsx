function Cart({ cart, increaseQuantity, decreaseQuantity, total }) {
  return (
    <div>
      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>
              ₹{item.price} × {item.quantity}
            </p>

            <button onClick={() => decreaseQuantity(item.id)}>-</button>

            <span> {item.quantity} </span>

            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>
    </div>
  );
}

export default Cart;
