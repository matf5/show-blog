import './index.scss';
import {
  Layout,
  Row,
  Col,
  Menu
} from 'antd';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';

const { Header } = Layout;

function Nav(props) {
  const [indexKey, setIndexKey] = useState('read');
  return (
    <Header>
      <Row>
        <Col span={4}></Col>
        <Col span={16}>
          <Menu mode="horizontal" selectedKeys={[indexKey]} onClick={(e) => setIndexKey(e.key)}>
            <Menu.Item key="read">
              <Link to="read">看文章</Link>
            </Menu.Item>
            <Menu.Item key="write">
              <Link to="write">写文章</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}
export default Nav;

