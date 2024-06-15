import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQunatity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQunatity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (totalCartQuantity === 0) return null;

  return (
    <div className="sticky bottom-0 bg-stone-800 text-stone-200 p-4 sm:px-6 flex justify-between">
      <div>
        <p className="font-semibold text-stone-300 space-x-4 sm:space-x-6 text-sm md:text-base">
          <span>{totalCartQuantity} pizzas</span>
          <span>{formatCurrency(totalCartPrice)}</span>
        </p>
      </div>
      <div>
        <Link to="/cart">Open cart &rarr;</Link>
      </div>
    </div>
  );
}

export default CartOverview;
