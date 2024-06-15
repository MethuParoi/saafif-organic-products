import { useNavigate } from "react-router-dom";

function EmptyCart() {
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
        Your cart is empty. Start adding some products :)
      </p>
    </div>
  );
}

export default EmptyCart;
