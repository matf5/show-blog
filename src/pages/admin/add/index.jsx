import MdEditor from '@comp/md-editor';
import React, { Component, useState, useEffect } from 'react';
import { Button, Input, Modal, BackTop, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './index.scss';
import axios from '@/utils/axios';

function AddArticle(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(false);
  async function add() {
    if (!title || !content) {
      alert('请输入正确的标题或文章');
    }
    const ret = await axios.post('/articles/add', {
      title,
      content
    });
    showMessage();
  }
  function showMessage() {
    Modal.info({
      title: '提交成功',
      // content: (
        
      // ),
      onOk() {
        props.history.replace('/home');
      },
    });
  }
  async function edit() {
    if (!title || !content) {
      alert('请输入正确的标题或文章');
    }
    await axios.post('/articles/update', {
      _id: props.match.params.articleId,
      content,
      title 
    });
    showMessage();
  }
  useEffect(() => {
    axios.post(`/articles/getById`, {
      _id: props.match.params.articleId
    }).then((article) => {
      setContent(article.content);
      setTitle(article.title);
    })
  }, [props.match.params.articleId]);
  return (
    <div className="add-article">
      <ul className="form-list">
        <li className="form-list-item">
          <span className="form-label">标题：</span>
          <span style={{ flex: 1 }}>
            <Input
              placeholder='请输入文章标题'
              className='title-input'
              name='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </span>
        </li>
      </ul>
      <MdEditor value={content} onChange={setContent}></MdEditor>
      <Button
        type='primary'
        shape='circle'
        size='large'
        disabled={!title}
        className='action-icon'
        title={'新增'}
        icon={<PlusOutlined />}
        onClick={() => {
          props.route.path.indexOf('edit') > 0 ? edit() : add();
        }}
      />
        {/* <Modal
          title="提交成功"
          visible={visible}
          onOk={() => {

          }}
          onCancel={() => {

          }}
        ></Modal> */}
    </div>
  )
}
export default AddArticle;