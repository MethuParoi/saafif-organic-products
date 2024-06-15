import Button from "./Button";

function HeroBanner({ source }) {
  return (
    <div className="relative">
      <div className="absolute top-[10rem] left-[37%]">
        <h1 className="text-primary text-5xl font-semibold select-none pointer-events-none bg-">
          Fresh food at your door
        </h1>

        <Button label="Order Now" type="primary" />
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
