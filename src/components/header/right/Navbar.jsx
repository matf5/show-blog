import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import navList from './navList'
import { Link, useLocation } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function NavBar(props) {
  const { mode = 'horizontal' } = props;
  const location = useLocation();
  function goAddArticle() {
    props.history.replace('/add');
  }
  return (
    <Menu mode={mode} className="header-nav" selectedKeys={[location.pathname]}>
      {
        navList.map(nav => (
          <Menu.Item key={nav.link}>
            <Link to={nav.link}>
            <span>{ nav.title }</span>
            </Link>
          </Menu.Item>
        ))
      }
     <Button 
       className="btn-add-article"
       onClick={() => {
         goAddArticle();
       }}>
        发表文章
      </Button>
    </Menu>

  )
};
export default withRouter(NavBar);