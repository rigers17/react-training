import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './module3/Module3';
import Module4 from './module4/Module4';
import Module5 from './Module5/Module5';
import Module6 from './Module6/Module6';
import Module7 from './Module7/Module7';
import Module8 from './Module8/Module8';
import Module9 from './Module9/Module9';
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
          <Route path="/module6" element={<Module6/>}/>
          <Route path="/module7" element={<Module7/>}/>
          <Route path="/module8" element={<Module8/>}/>
          <Route path="/module9" element={<Module9/>}/>

         </Routes>
      </Router>
    </>
  );

};

export default App;
