import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Module1 from './Components2/Module1';
import Module2 from './Components2/Module2';
import Module3 from './module3/User/Module3';
import Module4 from './module4/Home/Module4';
import Module5 from './Module5/UI/Module5';

const App = () => {

  return (
    <>
      <Router>

        <Routes>
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
