import React from 'react';
import { graphql } from 'gatsby';

import Footer from './Footer';
import Header from './Header';
import ListSection from './ListSection';
import * as css from './List.module.css';
import Autocomplete from 'react-autocomplete';
import isSubsequence from '../utils/subsequence';


export default function List({ data }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [checkedFilters, setCheckedFilters] = React.useState(new Set());
  const node = data.allListsJson.nodes[0];
  console.log(node);
  const organizedList = {}
  const rankSlots = {}
  for (const rankSlot of node.rankSlots) {
    organizedList[rankSlot.rankSlotID] = [];
    rankSlots[rankSlot.rankSlotID] = rankSlot;
  }

  const optionSymbolMap = {};
  const optionFilters = new Set();
  for (const option of Object.values(node.options)) {
    optionSymbolMap[option.tag] = {
      symbol: option.symbol,
      tooltip: option.title,
    };
  }

  const uniqueLocales = new Set();

  for (const item of node.items) {
    const rawLocaleString = item.locale.reduce((string, loc, index) => {
      string += (index === 0 ? loc : " > " + loc);
      uniqueLocales.add(string);
      return string;
    }, "");
    item["rawLocaleString"] = rawLocaleString;
    item["symbols"] = item.options.sort().map(tag => optionSymbolMap[tag]);
    organizedList[item.rankSlotID].push(item);
  }

  const localeSearch = (searchTerm) => setSearchTerm(searchTerm);

  const listSections = Object.keys(organizedList).map((rankSlotID, index) => {
    return (
      <div key={rankSlotID}>
        <ListSection
          searchTerm={searchTerm}
          rankSlotName={rankSlots[rankSlotID]}
          rankSlot={organizedList[rankSlotID]}
          filters={checkedFilters}
          localeSearch={localeSearch} />
        {index < Object.keys(organizedList).length - 1 ? <hr /> : null}
      </div>
    );
  });

  const updateFilters = (name, on) => {
    const newSet = new Set(checkedFilters);
    if (on) {
      newSet.add(name);
    } else {
      newSet.delete(name);
    }
    setCheckedFilters(newSet);
  };

  const filters = Object.values(node.options).map((option, index) => {
    return (
      <div className={css.filter} key={index}>
        <input type="checkbox" id={option.tag} name={option.tag} onChange={(e) => updateFilters(e.target.name, e.target.checked)} />
        <label htmlFor={option.tag} title={option.subtitle}>{option.symbol} {option.title}</label>
      </div>
    );
  });

  return (
    <div className='page'>
      <Header active='Lists' />
      <div className='content'>
        <div className={css.list}>
          <header className={css.listHeader}>
            <h1>{node.name}</h1>
            <Autocomplete
              getItemValue={(item) => item}
              items={Array.from(uniqueLocales).sort()}
              renderItem={(item, isHighlighted) =>
                <div
                key={item}
                style={{
                  background: isHighlighted ? '#EEEEEE' : '',
                  cursor: 'default',
                  padding: '5px 10px'
                }}>
                  {item}
                </div>
              }
              menuStyle={{
                background: 'white',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                fontSize: '11pt',
                lineHeight: 1.4,
                position: 'absolute',
                maxHeight: '50%',
                overflowY: 'auto',
                boxSizing: 'border-box'
              }}
              inputProps={{
                placeholder: 'Filter Regions',
              }}
              value={searchTerm}
              shouldItemRender={(item, value) => isSubsequence(value, item)}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSelect={(value) => setSearchTerm(value)}
              />
          </header>
          <div className={css.filters}>
            {filters}
          </div>
          <p className={css.additionalInfo}>{node.additionalInfo}</p>
          {listSections}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query($slug: String) {
    allListsJson(filter: {slug: {eq: $slug}}) {
      nodes {
        id
        slug
        name
        description
        additionalInfo
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
        }
        items {
          id
          name
          address
          locale
          rankSlotID
          orders
          options
        }
      }
    }
  }
`;
