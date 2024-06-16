import { useNavigate } from "react-router-dom";

function EmptySearch() {
  const navigate = useNavigate();

  return (
    <div className="my-8 mx-8">
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        &larr; Back to home
      </button>
      <p className="text-xl font-semibold mt-7">
        No matching product found, try different keywords ! :)
      </p>
    </div>
  );
}

export default EmptySearch;
