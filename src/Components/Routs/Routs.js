import { createBrowserRouter } from "react-router-dom";
import Main from "../Maine/Main";
import Home from "../Home/Home/Home";
import ProductsPages from "../ProductsPages/ProductsPages";
import AddProduct from "../AddProduct/AddProduct";

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
                element : <ProductsPages/>
            },
            {
                path : '/addProduct',
                element : <AddProduct/>
            }
        ]
    }
])