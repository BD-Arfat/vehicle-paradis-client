import { createBrowserRouter } from "react-router-dom";
import Main from "../Maine/Main";
import Home from "../Home/Home/Home";
import ProductsPages from "../ProductsPages/ProductsPages";
import AddProduct from "../AddProduct/AddProduct";
import EditsProducts from "../EditsProducts/EditsProducts";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

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
                element : <PrivetRouter><ProductsPages/></PrivetRouter>
            },
            {
                path : '/addProduct',
                element : <PrivetRouter><AddProduct/></PrivetRouter>
            },
            {
                path : '/products/edit/:productId',
                element : <EditsProducts/>
            },
            {
                path : '/register',
                element : <Register/>
            },
            {
                path : '/login',
                element : <Login/>
            }
        ]
    }
])