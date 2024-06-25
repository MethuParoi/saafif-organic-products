function SortButton({ label, onClick, isActive }) {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isActive}
        className={`${
          isActive ? "bg-primary text-gray-50" : "bg-gray-50 hover:bg-primary"
        } rounded-2xl font-medium text-lg mr-1 px-2 py-1 transition duration-300 text-gray-700 border-2 border-gray-300 shadow-md`}
      >
        {label}
      </button>
    </div>
  );
}

export default SortButton;
