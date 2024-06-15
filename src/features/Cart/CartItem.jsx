import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import {
  addItem,
  getCurrentQuantityById,
  getTotalCartQunatity,
} from "./cartSlice";
import { useEffect } from "react";

function CartItem({ item }) {
  const { productId, title, quantity, price, totalPrice } = item;

  const dispatch = useDispatch();
  const totalQantity = useSelector(getTotalCartQunatity);
  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  // useEffect(() => {
  //   // Dispatch the addItem action when the component mounts
  //   dispatch(addItem({ productId, title, quantity, price, totalPrice }));
  // }, [dispatch, productId, title, quantity, price, totalPrice]);

  return (
    <li className="py-3 flex justify-between items-center">
      <div>
        <p className="pb-2">
          {quantity}&times; {title}
        </p>

        <p className="text-sm font-semibold">{price * currentQuantity}</p>
      </div>

      <div className="flex items-center gap-x-7">
        <UpdateItemQuantity
          currentQuantity={currentQuantity}
          productId={productId}
        />
        <DeleteItem productId={productId} />
      </div>
    </li>
  );
}

export default CartItem;
