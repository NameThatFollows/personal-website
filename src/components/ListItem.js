import React from "react";

import * as css from "./ListItem.module.css";

export default function ListItem(props) {
  const itemList = props.items.map((item) => {
    return <li key={item.name}>{item.name}</li>;
  });

  const symbolList = props.symbols.map((symbolData) => {
    return (
      <span key={symbolData.tag} title={symbolData.tooltip}>
        {symbolData.symbol}
      </span>
    );
  });

  return (
    <div className={css.listItem}>
      <h3>{props.name}</h3>
      <p className={css.symbols}>{symbolList}</p>
      <p className={css.address}>{props.location.address}</p>
      <div className={css.orderList}>
        <ul>{itemList}</ul>
      </div>
    </div>
  );
}
