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
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQunatity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  console.log(totalCartPrice);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mt-4 mb-16 md:mb-10 mx-10">
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        &larr; Back to home
      </button>

      <h2 className="mt-7 text-xl font-semibold">Your cart</h2>

      <ul className=" divide-y-2 divide-stone-200 border-b-2">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div>
        <p className="pt-2 font-semibold text-gray-700 space-x-4 sm:space-x-6 text-sm md:text-xl">
          <span>৳ {Number(totalCartPrice)}</span>
          <span>{totalCartQuantity} items</span>
        </p>
      </div>

      <div className="mt-10 space-x-6">
        <Button
          label="Clear cart"
          type="standard"
          onClick={() => {
            dispatch(clearCart());
            toast.success("Cart cleared!");
          }}
        />
      </div>
    </div>
  );
}

export default Cart;
