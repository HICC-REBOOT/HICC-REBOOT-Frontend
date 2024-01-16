import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import Calendar from '@pages/Calendar/Calendar';
import Home from '@pages/Home';
import ROUTE from '@constants/route';
import Temp from '@pages/temp/Temp';
import Temp1 from '@components/Temp/temp1';
import Temp2 from '@components/Temp/temp2';
import Temp3 from '@components/Temp/temp3';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTE.HOME} element={<Home />} />
        <Route path={ROUTE.CALENDAR} element={<Calendar />} />
        <Route path="/temp" element={<Temp />}>
          <Route path="apple" element={<Temp1 />} />
          <Route path="banana" element={<Temp2 />} />
          <Route path="mango" element={<Temp3 />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
