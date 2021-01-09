import React from 'react';
import { graphql } from 'gatsby';

import Footer from './Footer';
import Header from './Header';
import ListSection from './ListSection';
import css from './List.module.css';
import Autocomplete from 'react-autocomplete';
import isSubsequence from '../utils/subsequence';


export default function List({ data }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const node = data.allListsJson.nodes[0];
  const organizedList = {}
  const rankSlots = {}
  for (const rankSlot of node.rankSlots) {
    organizedList[rankSlot.rankSlotID] = [];
    rankSlots[rankSlot.rankSlotID] = rankSlot;
  }

  const uniqueLocales = new Set();

  for (const item of node.items) {
    const rawLocaleString = item.locale.reduce((string, loc, index) => {
      string += (index === 0 ? loc : " > " + loc);
      uniqueLocales.add(string);
      return string;
    }, "");
    item["rawLocaleString"] = rawLocaleString;
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
          localeSearch={localeSearch} />
        {index < Object.keys(organizedList).length - 1 ? <hr /> : null}
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
          comments
        }
      }
    }
  }
`;
