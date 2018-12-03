import * as React from 'react';

interface IDeckType {
  id: string;
  name: string;
  description: string;
  url: string;
}

const Deck = ({ id, name, description, url }: IDeckType ) => (
  <div key={id}>
    <p>{`${name}: ${description}`}</p>
    <p>Details at {`${url}`}</p>
    <br />
  </div>
);

export default Deck;