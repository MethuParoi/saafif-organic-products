import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, getCart, getCurrentQuantityById } from "../../Cart/cartSlice";
import toast from "react-hot-toast";
import UpdateItemQuantity from "../../Cart/UpdateItemQuantity";
import { useEffect, useState } from "react";

function HotProducts({ img, title, price, id, category, description }) {
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
    <div className="flex my-4  md:w-[25rem] min-h-[8rem] md:h-[9rem] border rounded-lg bg-gray-50 border-transparent shadow-2xl">
      <div className="lg:w-[10rem]" onClick={navigate}>
        <img
          className="rounded-l-lg md:min-h-[9rem] min-h-[8rem] max-h-[8rem] md:max-h-[9rem] w-full object-contain object-center border-2 border-gray-400"
          src={img}
          alt="product image"
        />
      </div>
      <div className="md:pl-6 pl-8 w-[15rem] md:w-[17rem]">
        <div className="pt-2">
          <button>
            <h5 className="md:text-lg text-start text-md font-semibold tracking-tight text-gray-700 overflow-hidden overflow-ellipsis h-[3em]">
              {title}
            </h5>
          </button>
        </div>

        <div className="flex items-center justify-around pt-8">
          <span className="md:text-2xl text-xl font-bold text-primary ">
            {`৳ ${price}`}
          </span>
          {showButton ? (
            <button
              onClick={() => {
                handleAddToCart();
                toast.success("Item added to cart!");
              }}
              className="text-white bg-primary hover:bg-primaryHover  font-medium rounded-lg text-sm md:px-5 px-3 py-2 md:py-2.5 text-center  "
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

export default HotProducts;
