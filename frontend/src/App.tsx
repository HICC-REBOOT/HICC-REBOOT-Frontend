import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Temp from '@components/Temp/temp';
import Calendar from '@pages/Calendar/Calendar';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Temp />} />
        <Route path="/calendar" element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
