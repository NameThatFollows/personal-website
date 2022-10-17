import React from "react";

import ListItem from "./ListItem";
import * as css from "./ListSection.module.css";

export default function ListSection(props) {
  const rankSlotPlaces = props.places.reduce((output, place) => {
    const options = new Set(place.symbols.map((symbol) => symbol.tag));
    if (
      props.filters.size === 0 ||
      Array.from(props.filters).every((filter) => options.has(filter))
    ) {
      output.push(
        <ListItem
          key={place.id}
          id={place.id}
          name={place.name}
          location={place.location}
          items={place.items}
          symbols={place.symbols}
        />
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
        {rankSlotPlaces.length > 0
          ? rankSlotPlaces
          : "No items in this category"}
      </div>
    </div>
  );
}
