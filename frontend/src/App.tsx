import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Calendar from '@pages/Calendar/Calendar';
import Home from '@pages/Home';
import ROUTE from '@constants/route';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.CALENDAR} element={<Calendar />} />
      </Route>
    </Routes>
  );
}

export default App;
