import { Playground, store } from 'graphql-playground-react';
import React from 'react';
import { Provider } from 'react-redux';
import { List, ListItem, Notes } from 'spectacle';

const DoQuery = () => {
  return (
    <>
      <Provider store={store}>
        <Playground endpointUrl="https://api.graph.cool/simple/v1/swapi" />
      </Provider>

      <Notes>
        <List>
          <ListItem>Show query example</ListItem>
          <ListItem>Explain input, output, filters</ListItem>
          <ListItem>Show error example</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default DoQuery;
