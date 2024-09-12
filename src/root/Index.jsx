import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { navbar } from '../utils/navbar';
import Navbar from '../components/Navbar/navbar';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Navbar></Navbar>}>
        {navbar.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}

export default Index;
