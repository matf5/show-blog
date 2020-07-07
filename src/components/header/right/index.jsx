import React, { useState } from 'react';
import SearchInput from '@comp/search-input';
import NavBar from './Navbar';
import { Button } from 'antd';
const HeaderRight = (props) => {
  return (
    <div>
      <SearchInput>
      </SearchInput>
      <NavBar>
      </NavBar>
    </div>
  )
};
export default HeaderRight;