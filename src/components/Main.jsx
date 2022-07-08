import React from 'react';
import Button from './Button';
import MainGeneral from './MainGeneral';
import MainOthers from './MainOthers';
import MainQueries from './MainQueries';

const Main = () => {
  return ( 
    <div className="main">
      <MainGeneral/>
      <MainQueries/>
      <MainOthers/>
    </div>
   );
}
 
export default Main;