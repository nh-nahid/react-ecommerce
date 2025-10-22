import { createBrowserRouter } from "react-router"
import About from "../pages/About"
import App from '../pages/App';
import Team from "../pages/Team";
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";

export const rootRouter = createBrowserRouter([
    {path: '/', 
        element: <RootLayout /> , 
        children: [
          {path: '/', index: true, element: <Shop />},
        ]
    },
    // {path: '/', element: <App />},
  
])