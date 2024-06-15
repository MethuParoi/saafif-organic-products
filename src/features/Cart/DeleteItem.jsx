import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ productId }) {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(deleteItem(productId))}
      type="small"
      label="Delete"
    />
  );
}

export default DeleteItem;
