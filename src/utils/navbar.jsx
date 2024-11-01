import { v4 as uuidv4 } from 'uuid';
import Home from "../pages/home/Index";
import Properties from "../pages/properties/Index";
import Contacts from '../pages/contacts/Index';
import Favourites from '../pages/favourites/Index';
import AddNewProps from '../pages/addNewProp/Index';
import MyProps from '../pages/MyProps/Index';
import Register from '../pages/Register/Index';
import SignIn from '../pages/SignIn/Index';
import ProductViewPage from '../pages/productView/Index';
// import NotPage from "../pages/notFound";

export const navbar = [
    {
        id: uuidv4(),
        title: "Home",
        path: "/",
        element: <Home/>,
        private: false,
        hidden: false
    },
    {
        id: uuidv4(),
        title: "Properties",
        path: "/properties",
        element: <Properties/>,
        private: false,
        hidden: false
    },
    {
        id: uuidv4(),
        title: "",
        path: "*",
        element: <Contacts/>,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "Favourites",
        path: "/favourites",
        element: <Favourites/>,
        private: false,
        hidden: false,
    },
    {
        id: uuidv4(),
        title: "AddNewProperties",
        path: "/addnewprops",
        element: <AddNewProps/>,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "MyProperties",
        path: "/myprops",
        element: <MyProps/>,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "Register",
        path: "/register",
        element: <Register/>,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "SignIn",
        path: "/signin",
        element: <SignIn/>,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "ProductView",
        path: "/productview",
        element: <ProductViewPage/>,
        private: false,
        hidden: true,
    }
];
