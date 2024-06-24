import React from "react";
import { graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import ListSection from "./ListSection";
import * as css from "./List.module.css";
import { si } from "../utils/singular";
import { randInt } from "e";

export default function List({ data }) {
  const [checkedFilters, setCheckedFilters] = React.useState(new Set());
  const listMetadata = data.allListsJson.nodes[0];

  const optionSymbolMap = {};
  for (const option of listMetadata.options) {
    optionSymbolMap[option.tag] = {
      symbol: option.symbol,
      tag: option.tag,
      tooltip: option.title,
    };
  }

  const placeSections = new Array(listMetadata.rankSlots.length).fill([]);
  data.allMongodbListdataPlaces.group.forEach((group) => {
    const updatedNodes = group.nodes.map((node) => {
      node.symbols = [];
      if (node.visitCounter) {
        node.symbols.push(optionSymbolMap["visitCounter"]);
      }
      if (node.visitDineIn) {
        node.symbols.push(optionSymbolMap["visitDineIn"]);
      }
      if (node.visitOrderAhead) {
        node.symbols.push(optionSymbolMap["visitOrderAhead"]);
      }
      if (node.visitRepeat) {
        node.symbols.push(optionSymbolMap["visitRepeat"]);
      }
      return node;
    });
    placeSections[group.distinct[0] - 1] = updatedNodes;
  });

  const organizedList = {};
  const rankSlots = {};
  for (const rankSlot of listMetadata.rankSlots) {
    organizedList[rankSlot.rankSlotID] = [];
    rankSlots[rankSlot.rankSlotID - 1] = rankSlot;
  }

  let listSections = placeSections.map((places, index) => {
    return (
      <div key={index}>
        <ListSection
          rankSlotName={rankSlots[index]}
          places={places}
          symbols={optionSymbolMap}
          filters={checkedFilters}
        />
        {!si && index < Object.keys(organizedList).length - 1 ? <hr /> : null}
      </div>
    );
  });
  if (si) {
    listSections = listSections.at(randInt(0, listSections.length - 1));
  }

  const updateFilters = (name, on) => {
    const newSet = new Set(checkedFilters);
    if (on) {
      newSet.add(name);
    } else {
      newSet.delete(name);
    }
    setCheckedFilters(newSet);
  };

  const filters = Object.values(listMetadata.options).map((option, index) => {
    return (
      <div className={css.filter} key={index}>
        <input
          type="checkbox"
          id={option.tag}
          name={option.tag}
          onChange={(e) => updateFilters(e.target.name, e.target.checked)}
        />
        <label htmlFor={option.tag} title={option.subtitle}>
          {option.symbol} {option.title}
        </label>
      </div>
    );
  });

  return (
    <div className="page">
      <Header active="/lists" />
      <div className="content">
        <div className={css.list}>
          <header className={css.listHeader}>
            <h1>{si ? listMetadata.sname : listMetadata.name}</h1>
            {si ? null : <div className={css.filters}>{filters}</div>}
            <span>+ indicates a recommended food item.</span>
          </header>
          {listSections}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query ($slug: String, $type: String) {
    allListsJson(filter: { slug: { eq: $slug } }) {
      nodes {
        id
        slug
        name
        sname
        options {
          tag
          title
          subtitle
          symbol
        }
        rankSlots {
          rankSlotID
          title
          description
          sdescription
        }
      }
    }
    allMongodbListdataPlaces(filter: { type: { eq: $type } }) {
      group(field: rank) {
        nodes {
          id
          name
          rank
          items {
            hot
            ice
            name
            recommended
            sugar
            toppings
          }
          location {
            address
            geojson {
              type
              coordinates
            }
          }
          visitCounter
          visitDineIn
          visitOrderAhead
          visitRepeat
        }
        distinct(field: rank)
      }
    }
  }
`;
