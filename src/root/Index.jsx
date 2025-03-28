import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavbar } from '../utils/navbar';
import Navbar from '../components/Navbar/navbar';
import NotPage from "../pages/notFound";

function Index() {
  const navbar = useNavbar();

  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        {navbar.map(({ path, element, id, hidden }) => (
          !hidden && <Route key={id} path={path} element={element} />
        ))}
      </Route>
      <Route path='*' element={<NotPage />} />
    </Routes>
  );
}

export default Index;
