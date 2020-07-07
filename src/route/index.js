import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Write from '@comp/write';
import Read from '@comp/read';
import ArticleList from '@comp/article-list';
import Add from '../pages/admin/add';
import Article from '../pages/article';

export default [
  {
    path: '/',
    component: Home,
    routes:[
      // {
      //   path: '/',
      //   exact: true,
      //   // render: () => (
      //   //   <Redirect to={"/read"}/>
      //   // )
      // },
      {
        path: '/home',
        component: ArticleList
      },
      {
        path: "/write",
        component: Write,
      },
      {
        path: '/read',
        component: Read,
      },
      {
        path: '/add',
        component: Add
      },
      {
        path: '/edit/:articleId',
        component: Add
      },
      {
        path: '/article/:articleId',
        component: Article
      }
    ]
  }
]
