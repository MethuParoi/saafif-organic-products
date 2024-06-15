import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="my-4 mx-2">
      <button to="/home">&larr; Back to home</button>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <ul className=" divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-10 space-x-6">
        <Button label="Add to cart" type="primary" />

        <Button
          label="Clear cart"
          type="secondary"
          onClick={() => dispatch(clearCart())}
        />
      </div>
    </div>
  );
}

export default Cart;
