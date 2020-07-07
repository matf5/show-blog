import { Divider } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '@/utils/axios';
import React, { Component } from 'react';
import './index.scss';
import { translateMarkdown } from '@/utils/marked';

function ArticleList(props) {
  // const { list } = props;
  const [articleList, setAritcleList] = useState([]);
  useEffect(() => {
    async function fetchList() {
      const res = await axios.post('/articles/getList');
      setAritcleList(res);
    }
    fetchList();
  }, []);
  return (
    <ul className="article-list">
      {
        articleList.map(item => (
          <li key={item._id} className='article-list-item'>
            <Divider orientation="left">
              <span className="article-title">{item.title}</span>
              <span className="article-time">{item.createdTime.slice(0, 10)}</span>
            </Divider>
            <div
                className="article-detail"
                dangerouslySetInnerHTML={{ __html: translateMarkdown(item.content) }}
                onClick={ () => {
                  props.history.push(`/article/${item._id}`);
                }}>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default ArticleList;