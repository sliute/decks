import * as React from 'react';
import './App.css';

// import Deck from './components/Deck';
import Decks from './components/Decks';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>Welcome to my playing cards decks!</h2>
          <Decks />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
