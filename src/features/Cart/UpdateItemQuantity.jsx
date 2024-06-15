import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ productId, currentQuantity }) {
  const dispatch = useDispatch();
  console.log(currentQuantity);

  return (
    <div className="space-x-3">
      <Button
        type="rounded"
        label="-"
        onClick={() => dispatch(decreaseItemQuantity(productId))}
      />

      <span className="text-md font-bold">{currentQuantity}</span>
      <Button
        type="rounded"
        label="+"
        onClick={() => dispatch(increaseItemQuantity(productId))}
      />
    </div>
  );
}

export default UpdateItemQuantity;
