import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem } from "../features/Cart/cartSlice";
import toast from "react-hot-toast";

function HomeCard({ img, title, price, id, category, description }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("price", price);
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
    <div className="my-4 pb-4 md:w-[18rem] md:min-h-[21rem] border rounded-lg bg-gray-50 border-transparent shadow-2xl">
      <div onClick={navigate}>
        <img
          className="rounded-t-lg min-h-[14rem] max-h-[14rem] w-full object-contain object-center border-2 border-gray-400"
          src={img}
          alt="product image"
        />
      </div>
      <div className="px-5">
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
          </span>
          <button
            onClick={() => {
              handleAddToCart();
              toast.success("Item added to cart!");
            }}
            className="text-white bg-primary hover:bg-primaryHover  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
