import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, getCart, getCurrentQuantityById } from "../Cart/cartSlice";
import toast from "react-hot-toast";
import UpdateItemQuantity from "../Cart/UpdateItemQuantity";
import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

function ProductCard({
  img,
  title,
  price,
  quantity,
  product_id: id,
  category,
  description,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showButton, setShowButton] = useState(true);
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  useEffect(() => {
    if (currentQuantity === 0) {
      setShowButton(true);
    }
    if (currentQuantity > 0) {
      setShowButton(false);
    }
  }, [currentQuantity]);

  const handleAddToCart = () => {
    const newItem = {
      productId: id,
      title,
      quantity: 1,
      unitPrice: price,
      img,
      category,
      description,
    };
    dispatch(addItem(newItem));
  };
  return (
    <div className="my-4 pb-4 md:w-[15rem] md:min-h-[21rem] border rounded-lg bg-gray-50 border-transparent shadow-2xl ">
      <div>
        {/* <img
          className="rounded-t-lg min-h-[14rem] max-h-[14rem] w-full object-contain object-center border-2 border-gray-400"
          src={img}
          alt="product image"
        /> */}
        {/* image magnify functionality */}
        <div className="rounded-t-lg min-h-[15rem] max-h-[15rem] w-full object-scale-down object-center border-2 border-gray-400 flex items-center justify-center ">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "product image",
                isFluidWidth: true,
                src: img,
              },
              imageStyle: {
                objectFit: "contain",
                width: "100%",
                height: "100%",
              },
              // style: {
              //   overflow: "hidden",
              // },
              largeImage: {
                src: img,
                width: 1200,
                height: 800,
              },
              enlargedImageContainerDimensions: {
                width: "300%",
                height: "300%",
              },
              enlargedImagePosition: "beside",
              enlargedImageContainerStyle: {
                position: "absolute",
                background: "#fff",
                zIndex: 9999,
              },
            }}
          />
        </div>
      </div>
      <div className="px-2">
        <div className="pt-2">
          <button>
            <h5 className="text-lg font-semibold tracking-tight text-gray-700 overflow-hidden overflow-ellipsis h-[3em]">
              {title}
            </h5>
          </button>
        </div>

        <div className="flex items-center justify-between pt-3">
          <span className="text-2xl font-bold text-primary ">
            {`৳ ${price}`}
            <span className="text-left font-medium text-sm text-primary block">
              ({quantity})
            </span>
          </span>
          {showButton ? (
            <button
              onClick={() => {
                handleAddToCart();
                toast.success("Item added to cart!");
              }}
              className="text-white bg-primary hover:bg-primaryHover  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
            >
              Add to cart
            </button>
          ) : (
            <UpdateItemQuantity
              currentQuantity={currentQuantity}
              productId={id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
