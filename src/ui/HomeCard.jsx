import { useNavigate } from "react-router-dom";

function HomeCard({ img, title, price }) {
  const navigate = useNavigate();
  return (
    <div className="md:w-[18rem] md:min-h-[21rem] border  rounded-lg shadow bg-gray-50 border-gray-700">
      <div onClick={navigate}>
        <img
          className="rounded-t-lg min-h-[12rem] max-h-[12rem] w-full object-cover object-center"
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
          <button className="text-white bg-primary hover:bg-primaryHover  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
