import React from 'react';

import s from './CallsItemDescription.module.scss';

export const CallsItemDescription: React.FC<any> = () => (
  <div className={s.item}>
    <div className={s.item_type}>Тип</div>
    <div className={s.item_time}>Время</div>
    <div className={s.item_employee}>Сотрудник</div>
    <div className={s.item_call}>Звонок</div>
    <div className={s.item_source}>Источник</div>
    <div className={s.item_grade}>Оценка</div>
    <div className={s.item_duration}>Длительность</div>
  </div>
);
