import { createBrowserRouter } from "react-router"
import About from "../pages/About"
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import App from './../pages/App';

export const rootRouter = createBrowserRouter([
    {path: '/', 
        element: <RootLayout /> , 
        children: [
          {path: '/', index: true, element: <App />},
          {path: '/shop', element: <Shop />},
          {path: '/cart', element: <Cart />}
        ]
    },
    // {path: '/', element: <App />},
  
])