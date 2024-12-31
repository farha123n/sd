import React, { useState } from 'react';
import LInk from './LInk';
import { IoMenu } from "react-icons/io5";
import { FaSkullCrossbones } from "react-icons/fa6";
const Nav = () => {
  const[open,setOpen]=useState(true);
 const rout=    [
        {
          "path": "/home",
          "id": 1,
          "name": "Home"
        },
        {
          "path": "/about",
          "id": 2,
          "name": "About Us"
        },
        {
          "path": "/services",
          "id": 3,
          "name": "Services"
        },
        {
          "path": "/contact",
          "id": 4,
          "name": "Contact Us"
        },
        {
          "path": "/faq",
          "id": 5,
          "name": "FAQ"
        }
      ]
      
    return (
        <nav className={`  ${open?``:`mb-28`}  md:mb-0`}>
          <div className="md:hidden shadow-lg" onClick={()=>setOpen(!open)}>
             {open===false?<FaSkullCrossbones />:  <IoMenu className='text-2xl ' />
             } 
          </div>
          <ul
  className={`md:flex shadow-lg duration-1000 absolute md:static text-center ${
    open ? `-left-24` : `left-0 mb-20 `
  } `} // Add `top` or `bottom` to control vertical positioning
>          {rout.map(rou=>(<LInk key={rou.id} rou={rou} ></LInk>))
             }
          </ul>
      
        </nav>
    );
};

export default Nav;