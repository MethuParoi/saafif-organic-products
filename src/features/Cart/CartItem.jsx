import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import {
  // addItem,
  getCurrentQuantityById,
  getTotalCartQunatity,
} from "./cartSlice";
// import { useEffect } from "react";

function CartItem({ item }) {
  const { productId, title, quantity, price, totalPrice, img, description } =
    item;

  // const dispatch = useDispatch();
  const totalQantity = useSelector(getTotalCartQunatity);
  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  // useEffect(() => {
  //   // Dispatch the addItem action when the component mounts
  //   dispatch(addItem({ productId, title, quantity, price, totalPrice }));
  // }, [dispatch, productId, title, quantity, price, totalPrice]);

  return (
    <li className="py-4 flex flex-col md:relative">
      <div className="flex gap-8">
        <div>
          <img
            className="rounded-lg h-[14rem] w-[12rem] object-contain object-center border-2 border-gray-400 shadow-lg"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="pb-2 text-xl font-semibold">
            {quantity}&times; {title}
          </p>

          <p className="text-md text-gray-500 font-semibold">
            ৳ {price * currentQuantity}
          </p>

          <p className="pt-2 text-sm text-gray-500 max-w-[50rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-7 md:absolute md:top-[11rem] md:left-[14rem]">
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
