import { useDispatch, useSelector } from "react-redux"
import {addItem, removeItem} from "../utils/cartSlice"

const ItemList = ({items, showAddButton = true, showRemoveButton = false}) => {

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
      dispatch(addItem(item))
    }
    const handleRemoveItem = (item) => {
      dispatch(removeItem(item))
    }
    const cartItems = useSelector ((store)=> store.cart.items)
    console.log(cartItems)

  return (
    <div className='border-b border-blue-600 shadow-xl my-2 p-2'>
      {items?.map((i, index)=>
        <div key={i?.card?.info?.id + index} className='flex justify-between'>
          <div>
        <div className='font-semibold'>{i?.card?.info?.name}</div>
        <p className='my-2 border border-b-slate-400 text-sm p-2'>{i?.card?.info?.description}</p>
        </div>
        {showAddButton && <button className='bg-black text-white rounded-xl w-14 text-xs h-9' onClick={()=> handleAddItem(i)}>ADD+</button>}
        {showRemoveButton && 
      
        <div>
          {}
            <button className='bg-black text-white rounded-xl w-14 text-xs h-9'onClick={()=> handleRemoveItem(i)}>Remove</button>
            
        </div>
        
        }

        </div>
      )}
    </div>
  )
}

export default ItemList
