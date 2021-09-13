import React from 'react';

import ListItem from './ListItem';
import isSubsequence from '../utils/subsequence';
import css from './ListSection.module.css';

export default function ListSection(props) {
  const rankSlotItems = props.rankSlot.reduce((output, item) => {
    if (isSubsequence(props.searchTerm, item.rawLocaleString)) {
      output.push(
        <ListItem
          key={item.id}
          name={item.name}
          locale={item.locale}
          address={item.address}
          orders={item.orders}
          localeSearch={props.localeSearch} />
      );
    }
    return output;
  }, []);

  return (
    <div className={css.listSection}>
      <header>
        <h2>{props.rankSlotName.title}</h2>
        <p>{props.rankSlotName.description}</p>
      </header>
      <div className={css.listSectionItems}>
        {rankSlotItems.length > 0
          ? rankSlotItems
          : "No items in this category"}
      </div>
    </div>
  );
}
