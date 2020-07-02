import React, { Component } from 'react'
import { Menu } from 'antd';
import navList from './navList'

function NavBar(props) {
  const { mode = 'horizontal' } = props;
  return (
    <Menu mode={mode} className="header-nav">
      {
        navList.map(nav => (
          <Menu.Item key={nav.link}>
            <span>{ nav.title }</span>
          </Menu.Item>
        ))
      }
    </Menu>

  )
};
export default NavBar;