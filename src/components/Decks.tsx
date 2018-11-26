import * as React from 'react';

import Deck from './Deck';

import { Query } from "react-apollo";

import gql from "graphql-tag";

const Decks = () => (
  <Query
    query={gql`
      {
        decks {
          id
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p> };
      if (error) { return <p>Error :(</p> };

      return data.decks.map((deck:any) => (
        <Deck id={deck.id}/>
      ));
    }}
  </Query>
);

export default Decks;