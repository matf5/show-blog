import React, { useState } from 'react';
import { Input, Row, Icon } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './index.scss';

function SearthInput(props) {
  const [keyword, setKeyword] = useState('');
  const handleSubmit = () => {

  }
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }
  return (
    <div className="search-box">
      <SearchOutlined></SearchOutlined>
      <Input
        type="text"
        value={keyword}
        onChange={handleChange}
        onPressEnter={handleSubmit}
        className='search-input'
        placeholder='搜索文章'
        ></Input>
    </div>
  )
}
export default SearthInput;