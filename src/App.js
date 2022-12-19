import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './module3/Module3';
import Module4 from './module4/Module4';
import Module5 from './Module5/Module5';
import NavBar from './Navbar/NavBar';

const App = () => {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<NavBar/>} />
          <Route path="/module1" element={<Module1/>}/>
          <Route path="/module2" element={<Module2/>}/>
          <Route path="/module3" element={<Module3/>}/>
          <Route path="/module4" element={<Module4/>}/>
          <Route path="/module5" element={<Module5/>}/>

         </Routes>
      </Router>
    </>
  );

};

export default App;
