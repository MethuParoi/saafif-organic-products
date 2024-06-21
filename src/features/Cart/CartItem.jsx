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
  const {
    productId,
    title,
    quantity,
    unitPrice,
    totalPrice,
    img,
    description,
  } = item;

  const totalQantity = useSelector(getTotalCartQunatity);
  const currentQuantity = useSelector(getCurrentQuantityById(productId));



  return (
    <li className="py-4 flex flex-col md:relative">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex justify-center items-center md:flex-initial md:justify-start md:items-start">
          <img
            className="rounded-lg md:h-[14rem] h-[14rem] w-[14rem] md:w-[12rem] object-contain object-center border-2 border-gray-400 shadow-lg"
            src={img}
            alt=""
          />
        </div>
        <div>
          <p className="pb-2 text-xl font-semibold">
            {quantity}&times; {title}
          </p>

          <p className="text-md text-gray-500 font-semibold">
            ৳ {unitPrice * currentQuantity}
          </p>

          <p className="pt-2 pr-5 text-sm text-gray-500 max-w-[50rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-7 pt-5 md:pt-0 md:absolute md:top-[11rem] md:left-[14rem]">
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
