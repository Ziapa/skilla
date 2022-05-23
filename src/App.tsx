import React from 'react';

import s from './App.module.scss';
import { Content } from './Content/Content';
import { NavBar } from './NavBar/NavBar';

const App: React.FC<any> = () => (
  <div className={s.app}>
    <NavBar />
    <Content />
  </div>
);

export default App;
