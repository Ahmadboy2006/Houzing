import { v4 as uuidv4 } from 'uuid';
import HomePage from "../pages/home/Index";
import PropertiesPage from "../pages/properties/Index";
import ContactsPage from '../pages/contacts/Index';
import FavouritesPage from '../pages/favourites/Index';
import AddNewPropsPage from '../pages/addNewProp/Index';
import MyPropsPage from '../pages/MyProps/Index';
import RegisterPage from '../pages/Register/Index';
import SignInPage from '../pages/SignIn/Index';
import ProductViewPage from '../pages/productView/Index';
import ProfilePage from '../pages/profile/index';

export const navbar = [
    {
        id: uuidv4(),
        title: "Home",
        path: "/",
        element: <HomePage />,
        private: false,
        hidden: false
    },
    {
        id: uuidv4(),
        title: "Properties",
        path: "/properties",
        element: <PropertiesPage />,
        private: false,
        hidden: false
    },
    {
        id: uuidv4(),
        title: "",
        path: "/contacts",
        element: <ContactsPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "Favourites",
        path: "/favourites",
        element: <FavouritesPage/>,
        private: false,
        hidden: false,
    },
    {
        id: uuidv4(),
        title: "AddNewProperties",
        path: "/addnewprops",
        element: <AddNewPropsPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "MyProperties",
        path: "/myprops",
        element: <MyPropsPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "Register",
        path: "/register",
        element: <RegisterPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "SignIn",
        path: "/signin",
        element: <SignInPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "ProductView",
        path: "/productview",
        element: <ProductViewPage />,
        private: false,
        hidden: true,
    },
    {
        id: uuidv4(),
        title: "Profile",
        path: "/profile",
        element: <ProfilePage />,
        private: false,
        hidden: true,
    }
];
