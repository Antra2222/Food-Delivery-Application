
import React, { useContext, useEffect, useState } from "react"
import RestaurantCard, {withPromotedLabel} from "./RstaurantCard"
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState([])
  const onlineStatus = useOnlineStatus();
  const  RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser, setUserName} = useContext(userContext)

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5894431&lng=77.2074614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
      const data = await response.json();
      const restaurants = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setAllRestaurants(restaurants);
      setSearch(restaurants)

    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };


  if(onlineStatus === false){
    return <div>Looks like you are offline !!!!</div>
  }

  return (
    <div className="p-4">
      <div className="flex p-2">
        <input className="border border-neutral-950 rounded-xl" type="text" placeholder="enter text to earch" value={searchText} onChange={(e)=> {setSearchText(e.target.value)}} />
        <div className="pl-2" onClick={()=>{
          const searchedRes = allRestaurants.filter((s)=> s.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setSearch(searchedRes)}
        }>Search</div>
        <button onClick={() => {
          const filter = allRestaurants.filter((res) =>
            res.info.avgRating > 4.5
          )
          setSearch(filter)
        }}>Top Rated Restaurants</button>
        <label> UserName: </label>
        <input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className="flex flex-wrap">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          search.map((e) => (
            <Link key={e.info.id} to={`/restaurant/${e.info.id}`}>{e.info.areaName === "Sarojini Nagar" ? <RestaurantCardPromoted resData={e} /> : <RestaurantCard resData={e} />}</Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Body