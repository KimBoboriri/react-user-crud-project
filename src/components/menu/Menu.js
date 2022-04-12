import React from 'react';
import { Link }from 'react-router-dom'
import { Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { changeMenu, changeModal } from '../../redux'; 

//메뉴는 db조회로 수정 할 것 없음
const Menu = ({changeMenu, menus, selected_menu, changeModal, modal_status, modal_link, modal_heading}) => {
   const link = menus.map((menu) =>
   menu.link !== undefined ? (
   <NavItem key={menu.key}>
       <Link to={menu.link} style={{textDecoration:'none'}}>
           {selected_menu === menu.key ? 
           <NavLink active onClick={()=> changeMenu(menu.key)} >{menu.name}</NavLink> :
           <NavLink onClick={()=> changeMenu(menu.key)} >{menu.name}</NavLink>}
       </Link>
   </NavItem>
   ) : (
    <UncontrolledDropdown
    inNavbar
    nav
    key={menu.key}
    >
    <DropdownToggle
        caret
        nav
    >
        {menu.name}
    </DropdownToggle>
    <DropdownMenu>
        {menu.submenu.map((sub) =>
            sub.link.includes('/modal') ?
            (<DropdownItem onClick={()=> changeModal(true, sub.link, sub.name)}>
            {sub.name}
           </DropdownItem>) :
            (<Link to={sub.link} style={{textDecoration:'none'}}  key={sub.key}>
                  <DropdownItem onClick={()=> changeMenu(sub.key)}>
                    {sub.name}
                  </DropdownItem>
            </Link>)
        )}
    </DropdownMenu>
    </UncontrolledDropdown>
   )
   )

   return (
       <div>
           <Nav pills style={{width:"100%"}}>
               {link}
            </Nav>
        </div>
    );
};

const mapStateToProps = ({menuObj}) => {
    return {
        menus: menuObj.menus,
        selected_menu: menuObj.selected_menu,
        modal_status: menuObj.modal_status,
        modal_link : menuObj.modal_link,
        modal_heading: menuObj.modal_heading
    }
}

const mapDispatchToProps = {
    changeMenu: (menuKey) => changeMenu(menuKey),
    changeModal: (modal_status, modal_link, modal_heading) => changeModal(modal_status, modal_link, modal_heading)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);