import React from 'react';
import { Link }from 'react-router-dom'
import { CardTitle } from 'reactstrap'

import { connect } from 'react-redux'  //스토어를 사용하기 위해 불러옴
import { changeMenu } from '../../redux'; 

//메뉴는 db조회로 수정 할 것 없음
const Logo = ({changeMenu, menus}) => {
   const logoObj = menus.find((menu) => menu.key === 1);
   return (
        <Link to={logoObj.link} style={{textDecoration:'none'}} onClick={()=> changeMenu(logoObj.key)}>
          <CardTitle tag="h5" style={{fontWeight:'bold',color:'purple'}}>DEV YOUNG</CardTitle>
        </Link>
    );
};

const mapStateToProps = ({menuObj}) => {
    return {
        menus: menuObj.menus,
        selected_menu: menuObj.selected_menu
    }
}

const mapDispatchToProps = {
    changeMenu: (menuKey) => changeMenu(menuKey)
}

export default connect(mapStateToProps, mapDispatchToProps)(Logo);