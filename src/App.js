import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './route/index.js';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import '@comp/md-editor/index.scss';

const App = () => (
    <HashRouter>
      { renderRoutes(routes) }
    </HashRouter>
);

export default App;