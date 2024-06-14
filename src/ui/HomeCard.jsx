import dc from "../assets/demoCart.jpg";
function HomeCard({ img, title, rating, price }) {
  return (
    <div className="md:w-[18rem] md:min-h-[22rem] border  rounded-lg shadow bg-gray-50 border-gray-700">
      <div>
        <img
          className="rounded-t-lg h-[12rem] w-full object-cover object-center"
          src={dc}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <div className="pt-2">
          <button>
            <h5 className="text-lg font-semibold tracking-tight text-gray-700">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </button>
        </div>

        <div className="flex items-center justify-between pt-3">
          <span className="text-2xl font-bold text-green-500 ">৳ 52</span>
          <button className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
