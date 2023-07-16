import { createBrowserRouter } from "react-router-dom";
import Main from "../Maine/Main";
import Home from "../Home/Home/Home";
import Products from "../Products/Products";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/products',
                element : <Products/>
            }
        ]
    }
])