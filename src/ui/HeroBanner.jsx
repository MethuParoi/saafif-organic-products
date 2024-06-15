function HeroBanner({ source }) {
  return (
    <div className="relative">
      <div className="absolute top-[10rem] left-[37%]">
        <h1 className="text-primary text-5xl font-semibold select-none pointer-events-none bg-">
          Fresh food at your door
        </h1>
        <button className="absolute top-[6rem] left-[30%] text-white text-2xl font-semibold bg-primary hover:bg-green-700 px-10 py-4 rounded-3xl">
          Order Now
        </button>
      </div>
      <img
        className="w-screen h-[40rem] select-none pointer-events-none"
        src={source}
        alt=""
      />
    </div>
  );
}

export default HeroBanner;
