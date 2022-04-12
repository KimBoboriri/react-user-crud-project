import React from 'react';
import { Link }from 'react-router-dom'
import { Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { changeMenu } from '../../redux'; 

//메뉴는 db조회로 수정 할 것 없음
const Menu = ({changeMenu, menus, selected_menu}) => {
   const link = menus.map((menu) =>
   menu.link !== undefined ? (
   <NavItem key={menu.key}>
       <Link to={menu.link} style={{textDecoration:'none'}}>
           {selected_menu === menu.key ? 
           <NavLink active onClick={()=> changeMenu(menu.key)}>{menu.name}</NavLink> :
           <NavLink onClick={()=> changeMenu(menu.key)}>{menu.name}</NavLink>}
       </Link>
   </NavItem>
   ) : (
    <UncontrolledDropdown
    inNavbar
    nav
    >
    <DropdownToggle
        caret
        nav
    >
        {menu.name}
    </DropdownToggle>
    <DropdownMenu>
        {menu.submenu.map((sub) =>
            <Link to={sub.link} style={{textDecoration:'none'}}>
                  <DropdownItem onClick={()=> changeMenu(sub.key)}>
                    {sub.name}
                  </DropdownItem>
            </Link>
        )}
    </DropdownMenu>
    </UncontrolledDropdown>
   )
   )

   return (
       <div>
           <Nav pills style={{width:"100%"}}>
               {link}
               {/* <UncontrolledDropdown
                inNavbar
                nav
                >
                <DropdownToggle
                    caret
                    nav
                >
                    확진자 추이(작업예정)
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem>
                    4월
                    </DropdownItem>
                    <DropdownItem>
                    3월
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown> */}
            </Nav>
        </div>
    );
};

const mapStateToProps = ({menuObj}) => {
    console.log("mapStateToProps:",menuObj);
    return {
        menus: menuObj.menus,
        selected_menu: menuObj.selected_menu
    }
}

const mapDispatchToProps = {
    changeMenu: (menuKey) => changeMenu(menuKey)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);