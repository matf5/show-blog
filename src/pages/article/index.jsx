import React, { useState, useEffect } from 'react';
import { translateMarkdown } from '@/utils/marked';
import { Drawer, Divider, Spin, Button } from 'antd';
import axios from '@/utils/axios';
import { PrinterTwoTone } from '@ant-design/icons';
import './index.scss';

function Article(props) {
  const [article, setArticle] = useState({
    title: '',
    content: '',
    createdTime: ''
  })
  useEffect(() => {
    axios.post(`/articles/getById`, {
      _id: props.match.params.articleId
    }).then((article) => {
      setArticle(article);
    })
  }, [props.match.params.articleId]);
  return (
    <article className="app-aritcle">
      <div className="post-header">
        <h1 className="post-title">{ article.title }</h1>
        <div className="article-desc">
          <PrinterTwoTone></PrinterTwoTone>
          <span>{ article.createdTime.slice(0, 10) }</span>
        </div>
        <Button className="btn-edit"
        onClick={() => {
          props.history.push(`/edit/${props.match.params.articleId}`);
        }}
        >修改文章</Button>
      </div>
      <div
        className="article-detail"
        dangerouslySetInnerHTML={{ __html: translateMarkdown(article.content) }}>
      </div>
    </article>
  )
}
export default Article;