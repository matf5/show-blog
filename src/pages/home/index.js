import React from 'react';
import { renderRoutes } from "react-router-config";
import Header from '@comp/header';
import { Layout, Icon, Row, Col, BackTop } from 'antd'
import LeftSide from '@comp/left-side';
import './index.scss';
// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

function Home (props) {
  const { route } = props;
  console.log(route);
  return (
    <Layout className="app-container">
      <Header></Header>
      <Row className="app-wrapper">
        <Col {...siderLayout}>
          <LeftSide></LeftSide>
        </Col>
        <Col {...contentLayout}>
            {/* <AppMain {...props} /> */}
            { renderRoutes(route.routes) }
        </Col>
      </Row>
    </Layout>
  )
}
export default React.memo(Home);