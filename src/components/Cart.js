import { useSelector, useDispatch } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

  return (
    <div>
      <h1>Cart</h1>
      <button onClick={handleClearCart}>Clear Cart</button>
      <div className="w-1/2 mx-auto bg-blue-100 p-4">
      <ItemList items={cartItems} showAddButton={false} showRemoveButton={true}/>
      </div>
    
    </div>
  )
}

export default Cart
