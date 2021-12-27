import React from 'react';
import { createLocaleString } from '../utils/localeString';

import * as css from './ListItem.module.css';

export default function ListItem(props) {
  // Create location breadcrumbs. (e.g. USA > SF Bay Area > San Francisco)
  const localeTrail = props.locale.map((location, index) => {
    return (
      <div className={css.item} key={location}>
        <button
          onClick={(event) => {
            props.localeSearch(createLocaleString(props.locale.slice(0, index + 1)))
          }}>
          {location}
        </button>
        {index < props.locale.length - 1 ? " >" : ""}
      </div>
    );
  });

  const orderList = props.orders.map((order) => {
    return <li key={order}>{order}</li>
  });

  const symbolList = props.symbols.map((symbolData) => {
    return <span key={symbolData.tooltip} title={symbolData.tooltip}>{symbolData.symbol}</span>
  });

  return (
    <div className={css.listItem} key={props.id}>
      <h3>{props.name}</h3>
      <p className={css.symbols}>{symbolList}</p>
      <p className={css.address}>{props.address}</p>
      <div className={css.orderList}>
        <ul>
          {orderList}
        </ul>
      </div>
      <div className={css.localeTrail}>{localeTrail}</div>
    </div>
  );
}
