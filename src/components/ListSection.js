import React from 'react';

import ListItem from './ListItem';
import isSubsequence from '../utils/subsequence';
import * as css from './ListSection.module.css';

export default function ListSection(props) {
  const rankSlotItems = props.rankSlot.reduce((output, item) => {
    const options = new Set(item.options);
    if ((props.filters.size == 0
      || Array.from(props.filters).every(filter => options.has(filter)))
      && isSubsequence(props.searchTerm, item.rawLocaleString)) {
      output.push(
        <ListItem
          key={item.id}
          name={item.name}
          symbols={item.symbols}
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
