import React from 'react';

import '../App.css';

const Button = ({ children, onClink }) => {
  return ( 
    <button onClink={ onClink } className="button">
      { children }
    </button>
   );
}
 
export default Button;