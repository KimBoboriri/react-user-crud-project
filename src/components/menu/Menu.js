import React from 'react';
import { Link }from 'react-router-dom'
import { Nav, NavItem, NavLink,
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { changeMenu } from '../../redux'; 

//메뉴는 db조회로 수정 할 것 없음
const Menu = ({changeMenu, menus, selected_menu}) => {
console.log('aaaa',menus);
   const link = menus.map((menu) =>
   <NavItem key={menu.key}>
       <Link to={menu.link}>
           {selected_menu === menu.key ? 
           <NavLink active onClick={()=> changeMenu(menu.key)}>{menu.name}</NavLink> :
           <NavLink onClick={()=> changeMenu(menu.key)}>{menu.name}</NavLink>}
       </Link>
   </NavItem>
   )

   return (
       <div>
           <Nav pills>
               {link}
               <UncontrolledDropdown
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
                    <DropdownItem divider />
                    <DropdownItem>
                    1년 통계
                    </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
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