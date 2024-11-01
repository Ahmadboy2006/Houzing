import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import Navbar from '../components/Navbar/navbar';
import NotPage from "../pages/notFound";

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        {navbar.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Route>
      <Route path='*' element={<NotPage />} />
    </Routes>
  );
}

export default Index;
