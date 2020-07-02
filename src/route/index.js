import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../pages/home';
import Write from '@comp/write';
import Read from '@comp/read';

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
        path: "/write",
        component: Write,
        // routes: [{
        //   path: "/recommend/:id",
        //   component: Album
        // }
        // ]
      },
      {
        path: '/read',
        component: Read,
      }
    ]
  }
]
