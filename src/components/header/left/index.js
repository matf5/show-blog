import React, { useState } from 'react';
import { Icon, Dropdown, Menu, Input, messgae } from 'antd';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import './index.scss';
import { HEADER_BLOG_NAME } from '@/config';

const HeaderLeft = props => {
  const [keyword, setKeyWord] = useState('');
  function clickSearch(e) {
    e.stopPropagation()
  }
  function onSubmit() {
    
  }
  function handleChange(e) {
    setKeyWord(e.target.value);
  }
  function onPressEnter() {

  }
  const menu = (
    <Menu className="header-nav">
      <Menu.Item>
        <Input
            className="search-input"
            onClick={clickSearch}
            value={keyword}
            onChange={handleChange}
            onPressEnter={onPressEnter}
            >
        </Input>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header-left">
      <span className='blog-name'>{HEADER_BLOG_NAME}</span>
      {/* {menu} */}
    </div>
  )
};
export default HeaderLeft;