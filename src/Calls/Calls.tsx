import React from 'react';

import s from './Calls.module.scss';
import { CallsItemDescription } from './CallsItemDescription';

export const Calls: React.FC<any> = () => (
  <div className={s.content}>
    <CallsItemDescription />
  </div>
);
