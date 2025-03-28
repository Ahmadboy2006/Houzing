import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
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

export function useNavbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return [
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
        title: "Contacts",
        path: "/contacts",
        element: <ContactsPage />,
        private: false,
        hidden: false,
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
        private: true,
        hidden: !token,
    },
    {
        id: uuidv4(),
        title: "MyProperties",
        path: "/myprops",
        element: <MyPropsPage />,
        private: true,
        hidden: !token,
    },
    {
        id: uuidv4(),
        title: "Register",
        path: "/register",
        element: <RegisterPage />,
        private: false,
        hidden: false,
    },
    {
        id: uuidv4(),
        title: "SignIn",
        path: "/signin",
        element: <SignInPage />,
        private: false,
        hidden: false,
    },
    {
        id: uuidv4(),
        title: "ProductView",
        path: "/productview",
        element: <ProductViewPage />,
        private: false,
        hidden: false,
    },
    {
        id: uuidv4(),
        title: "Profile",
        path: "/profile",
        element: <ProfilePage />,
        private: false,
        hidden: !token,
    }
  ];
}
