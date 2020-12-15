import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import { Menu, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';


function Nav(){

  const [collapsed, setCollapsed]= useState(true);

  const { SubMenu } = Menu;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  //si je click sur l'onglet menu, il s'affiche
  function menu2(){
    return(
      <div>
        <Menu style={{position: 'relative', left: '100px', background:  'rgba(0, 0, 0, 0.3)'}}
              
              mode="inline"
              theme="light"
              inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" >
            <Link to='/'>Accueil</Link>
          </Menu.Item>
         
          <SubMenu key="sub1"  title="Random" >
            <Menu.Item key="2"> <Link to='/random-nombre'>Random avec nombre</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/random-nom'>Random avec nom</Link></Menu.Item>
          </SubMenu>
  
          <Menu.Item key="4" >
            <Link to= '/liste-maudite'>La liste maudite</Link>
          </Menu.Item>

          <Menu.Item key="5" >
            <Link to= '/qui-rap'>Qui rap?</Link>
          </Menu.Item>

        </Menu>
      </div>
    )
  }

  return(
    <div style={{ width: 256, height: 60, position: 'fixed', zIndex: 1 }}>

      <Button onClick={toggleCollapsed} className='buttonNav'>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>

      {!collapsed ? menu2() : null} 

    </div>
  )
}



export default Nav;