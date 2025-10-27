import { createBrowserRouter } from "react-router"
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import App from './../pages/App';
import About from '../pages/About';
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import Admin from "../pages/Admin";

export const rootRouter = createBrowserRouter([
    {path: '/', 
        element: <RootLayout /> , 
        children: [
          {path: '/', index: true, element: <App />},
          {path: '/shop', element: <Shop />},
          {path: '/cart', element: 
            <PrivateRoute>
                <Cart/>
            </PrivateRoute>
          },
          {path: '/about', element: <About />},
          {path: '/sign-up', element: <SignUp />},
          {path: '/login', element: <Login />},
          {path: '/admin', element: 
            <PrivateRoute>
                <Admin />
            </PrivateRoute>
          }
        ]
    },
    // {path: '/', element: <App />},
  
])