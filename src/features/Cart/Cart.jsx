import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getCart,
  getTotalCartPrice,
  getTotalCartQunatity,
} from "./cartSlice";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";

function Cart() {
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQunatity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(totalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="my-4 mx-8">
      <button to="/home">&larr; Back to home</button>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <ul className=" divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div>
        <p className="font-semibold text-gray-700 space-x-4 sm:space-x-6 text-sm md:text-xl">
          <span>{Number(totalCartPrice)}</span>
          <span>{totalCartQuantity} items</span>
        </p>
      </div>

      <div className="mt-10 space-x-6">
        <Button
          label="Clear cart"
          type="standard"
          onClick={() => dispatch(clearCart())}
        />
      </div>
    </div>
  );
}

export default Cart;
