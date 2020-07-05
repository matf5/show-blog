
import LeftSideData from '../../const/leftSideData';
import leftSideData from '../../const/leftSideData';
import { Divider } from 'antd'
import React from 'react';
import './index.scss';

function LeftSide(props) {
  return (
    <aside className="left-side">
      <img className="avator" src={LeftSideData.avatar}></img>
      <h2 className="title">{leftSideData.title}</h2>
      <h5 className="subTitle">{ leftSideData.subTitle }</h5>
      <Divider orientation="left">热门文章</Divider>
      <Divider orientation="left">标签</Divider>
    </aside>
  )
}
export default LeftSide;