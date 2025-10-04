import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import useRestrauntMenu from '../utils/useRestrauntMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();
    const resMenu = useRestrauntMenu (resId);
    const name = resMenu?.data?.cards[0]?.card?.card?.text
    const category = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const cc = category?.filter((e)=>
      e?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
       )

       const [showIndex, setShowIndex] = useState(0)
      const showItem = true

  return (
    <div>
        <h1>{name}</h1>
        <h2>Menu</h2>
        <div className='border border-slate-300 w-1/2 bg-slate-200 justify-self-center'>
          {cc?.map((c, index)=>
          <RestaurantCategory key={c.card.card.title} data={c.card.card} 
          showItem={index === showIndex && showItem} setShowIndex={() =>
            showIndex !== index ? setShowIndex(index) : setShowIndex(null)
          }/>)}
        </div>
        
    </div>
  )
}

export default RestaurantMenu
