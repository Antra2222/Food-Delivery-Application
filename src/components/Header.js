import {useContext, useState} from "react"
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";


const Header = () => {


    const {loggedInUser} = useContext(userContext)
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items)

    const [btnName, setBtnName] = useState('Login')

    return(
        <div className="flex justify-between shadow-lg">
            <div>
                <img src={LOGO_URL} alt="logo" />
                </div>
                <div>
                    <ul className="font-serif flex mt-6">
                        <li className="pr-6"><Link to="/">Home</Link></li>
                        <li className="pr-6"><Link to="/about">About</Link></li>
                        <li className="pr-6"><Link to="/contact">Contact Us</Link></li>
                        <li className="pr-6 font-bold text-lg"><Link to="/cart">({cartItems.length}) items</Link></li>
                        <li className="pr-6"><Link to="/grocery">Grocery</Link></li>
                        <li className="pr-6">{loggedInUser}</li>
                        <button className=" bg-green-950 font-mono text-gray-50 p-2 mb-4 mr-4 rounded-lg"
                        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
                        >{btnName}</button>
                        <div className="flex">Online Status: {onlineStatus ? <div className="w-4 h-4 rounded-lg bg-green-700 m-2 mt-1"></div> : <div className="w-4 h-4 rounded-lg bg-red-700 m-2 mt-1"></div>}</div>
                    </ul>
                </div>
                </div>
    )
}

export default Header;