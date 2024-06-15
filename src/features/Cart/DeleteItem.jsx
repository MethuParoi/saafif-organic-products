import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import toast from "react-hot-toast";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(deleteItem(productId));
        toast.success("Item removed from cart!");
      }}
      type="small"
      label="Delete"
    />
  );
}

export default DeleteItem;
