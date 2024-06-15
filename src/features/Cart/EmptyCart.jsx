import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="my-4 mx-2">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="text-xl font-semibold mt-7">
        Your cart is empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
