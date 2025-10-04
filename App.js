import {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About"
import Contact from "./src/components/Contact"
import RestaurantMenu from "./src/components/RestaurantMenu"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "./src/utils/userContext"
import appStore from "./src/utils/appStore"
import { Provider } from "react-redux"
import Cart from "./src/components/Cart"


const Grocery = lazy(()=>import ("./src/components/Grocery"));
const AppLayout = () => {

  const [userName, setUserName] = useState('')

  useEffect(()=>{
    const data = {
      name: "Neha"
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
    <userContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div>
      <Header/>
      <Outlet/>
    </div>
    </userContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <AppLayout/>,

    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>)
      }
    ]
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)