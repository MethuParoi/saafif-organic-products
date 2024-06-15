function Button({ label, onClick, type }) {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="absolute top-[6rem] left-[30%] text-white text-2xl font-semibold bg-primary hover:bg-primaryHover px-10 py-4 rounded-3xl"
      >
        {label}
      </button>
    );
  }

  if (type === "standard") {
    return (
      <button
        onClick={onClick}
        className="text-white text-xl font-semibold bg-primary hover:bg-primaryHover px-5 py-2 rounded-3xl"
      >
        {label}
      </button>
    );
  }

  if (type === "small") {
    return (
      <button
        onClick={onClick}
        className="text-white text-md font-semibold bg-primary hover:bg-primaryHover px-2 py-2 rounded-3xl"
      >
        {label}
      </button>
    );
  }

  if (type === "rounded") {
    return (
      <button
        onClick={onClick}
        className=" text-white  transition-colors duration-300 rounded-full px-3 py-1 font-bold text-xl bg-primary hover:bg-primaryHover "
      >
        {label}
      </button>
    );
  }
}

export default Button;