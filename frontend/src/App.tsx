import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Temp from '@components/Temp/temp';
import Admin from '@pages/Admin/Admin';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Temp />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
