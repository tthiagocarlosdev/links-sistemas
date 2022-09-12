import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Dti from './pages/Dti';

const MainRoutes = () => {
  return ( 
    <Routes>
      <Route path="/links-sistemas" element={ <Home/> } />
      <Route path="/dti" element={ <Dti/> } />

      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
   );
}
 
export default MainRoutes;