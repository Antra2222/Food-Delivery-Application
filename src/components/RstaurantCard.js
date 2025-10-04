import React, { useContext } from "react"
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
    const {loggedInUser} = useContext(userContext)
    const {resData} = props
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo} = resData?.info;
  return (
    <div className="bg-slate-200 w-60 p-3 m-3 cursor-pointer  border border-transparent hover:border-black">
        <img className=" bg-contain" src={CDN_URL + cloudinaryImageId} alt="res_img" />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white font-mono rounded-lg m-2 p-2">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard
