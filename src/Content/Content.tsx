import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Calls } from '../Calls/Calls';
import { Main } from '../Main/Main';

import s from './Content.module.scss';

export const Content: React.FC<any> = () => (
  <div className={s.content}>
    <Routes>
      <Route path="Calls" element={<Calls />} />
      <Route path="Main" element={<Main />} />
    </Routes>
  </div>
);
