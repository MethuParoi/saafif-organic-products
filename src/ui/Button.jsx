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
        className="text-white text-2xl font-semibold bg-primary hover:bg-green-700 px-10 py-4 rounded-3xl"
      >
        {label}
      </button>
    );
  }
}

export default Button;
