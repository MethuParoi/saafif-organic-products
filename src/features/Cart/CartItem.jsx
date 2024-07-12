import { useDispatch, useSelector } from "react-redux";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import {
  // addItem,
  getCurrentQuantityById,
  getTotalCartQunatity,
} from "./cartSlice";
import { useState } from "react";
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

  const image = img.split(" ");

  const image1 = image[0];
  const image2 = image[1];
  const [displayImage, setDisplayImage] = useState(image1);

  function handleDisplayImage(imageKey) {
    if (imageKey === "image1") {
      setDisplayImage(image1);
    }
    if (imageKey === "image2") {
      setDisplayImage(image2);
    }
  }

  const totalQantity = useSelector(getTotalCartQunatity);
  const currentQuantity = useSelector(getCurrentQuantityById(productId));

  return (
    <li className="py-4 flex flex-col md:relative">
      {/* photo and description */}
      <div className="flex lg:flex-row flex-col justify-center lg:justify-start items-center lg:items-stretch gap-8">
        <div className="flex justify-center items-center md:flex-initial md:justify-start md:items-start">
          {/* image and options */}
          <div>
            <img
              className="rounded-lg md:h-[14rem] h-[14rem] w-[14rem] md:w-[12rem] object-contain object-center border-2 border-gray-400 shadow-lg"
              src={displayImage}
              alt=""
            />

            {/* photo options */}
            <div className="pt-4 pl-[3.5rem]">
              <button className=" ">
                <img
                  className="rounded-lg h-[2rem] w-[2rem] object-contain object-center border-2 border-gray-400 hover:border-primary hover:border-4 shadow-lg"
                  src={image1}
                  alt=""
                  onClick={() => handleDisplayImage("image1")}
                />
              </button>
              <button className="pl-[1rem]">
                <img
                  className="rounded-lg h-[2rem] w-[2rem] object-contain object-center border-2 border-gray-400 hover:border-primary hover:border-4 shadow-lg"
                  src={image2}
                  alt=""
                  onClick={() => handleDisplayImage("image2")}
                />
              </button>
            </div>
          </div>
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

      <div className="flex items-center justify-center lg:justify-start gap-x-7 pt-5 md:pt-0 lg:absolute lg:top-[11rem] lg:left-[14rem]">
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
