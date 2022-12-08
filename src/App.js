import React, { useState } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Apps1 from "./Components2/Apps1";
import AppOld from "./Components2/AppOld";

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  return (
    <>
      <Router>
        <NavBar/>

        <Routes>
          <Route path="/module1" element={<AppOld/>}/>
          <Route path="/module2" element={<Apps1/>}/>
        </Routes>
      </Router>
    </>
  );

};

export default App;
