import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data, showItem, setShowIndex}) => {

  console.log(data.title)

  return (
    <div>
        <div className='font-bold font-sans text-xl my-3 p-2 border border-indigo-950'
        onClick={()=>setShowIndex()}>
        {data.title}
        </div>
        {showItem && <ItemList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory
