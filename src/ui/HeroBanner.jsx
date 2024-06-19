function HeroBanner({ source }) {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-screen object-fill lg:h-[40rem] h-[30rem] select-none pointer-events-none"
        src={source}
        alt=""
      />
    </div>
  );
}

export default HeroBanner;
