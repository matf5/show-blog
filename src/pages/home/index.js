import React from 'react';
import { renderRoutes } from "react-router-config";
import Header from '@comp/header';

function Home (props) {
  const { route } = props;
  console.log(route);
  return (
    <div>
      <Header></Header>
      { renderRoutes(route.routes) }
    </div>
  )
}
export default React.memo(Home);