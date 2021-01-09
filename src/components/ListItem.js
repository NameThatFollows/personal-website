import React from 'react';
import { createLocaleString } from '../utils/localeString';

import css from './ListItem.module.css';

export default function ListItem(props) {
  const localeTrail = props.locale.map((location, index) => {
    return (
      <div className={css.item} key={location}>
        <button
          onClick={(event) => {
            props.localeSearch(createLocaleString(props.locale.slice(0, index + 1)))
          }}
        >
          {location}
        </button>
        {index < props.locale.length - 1 ? " >" : ""}
      </div>
    );
  });
  return (
    <div className={css.listItem} key={props.id}>
      <h3>{props.name}</h3>
      <p className={css.address}>{props.address}</p>
      <p className={css.comments}>{props.comments}</p>
      <div className={css.localeTrail}>{localeTrail}</div>
    </div>
  );
}
