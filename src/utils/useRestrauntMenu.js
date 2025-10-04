import {useState, useEffect} from 'react'

const useRestrauntMenu = (resId) => {

    const [resMenu, setResMenu] = useState(null)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.581054394724543&lng=77.08630487322807&restaurantId=${resId}`)
        const json = await data.json();
        setResMenu(json)
    }

  return  resMenu;
  
}

export default useRestrauntMenu
