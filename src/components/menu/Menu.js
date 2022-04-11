import React, { useState } from 'react';
import { Link }from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

//메뉴는 db조회로 수정 할 것 없음
const Menu = ({menulist}) => {
   const [selectedKey, setSelectedKey] = useState(1);

   const link = menulist.map((menu) =>
   <NavItem key={menu.key}>
       <Link to={menu.link}>
           {selectedKey === menu.key ? 
           <NavLink active onClick={()=> setSelectedKey(menu.key)}>{menu.name}</NavLink> :
           <NavLink onClick={()=> setSelectedKey(menu.key)}>{menu.name}</NavLink>}
       </Link>
   </NavItem>
   )

   return (
       <div>
           <Nav pills>
               {link}
            </Nav>
        </div>
    );
};

export default Menu;