import * as React from 'react';

import { Query } from "react-apollo";

import gql from "graphql-tag";

const GET_DECK = gql`
  query Deck($id: String!) {
    deck(id: $id) {
      name
      description
      url
    }
  }
`;

const Deck = ({id}:{id:string}) => (
  <Query query={GET_DECK} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p> };

      if (error) { return <p>Error :(</p> };

      return (
        <div key={data.deck.name}>
          <p>{`${data.deck.name}: ${data.deck.description}`}</p>
          <p>Details at {`${data.deck.url}`}</p>
          <br />
        </div>
      );
    }}
  </Query>
);

export default Deck;