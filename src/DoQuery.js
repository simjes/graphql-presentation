import { Playground, store } from 'graphql-playground-react';
import React from 'react';
import { Provider } from 'react-redux';

const DoQuery = () => {
  return (
    <>
      <Provider store={store}>
        <Playground endpointUrl="https://api.graph.cool/simple/v1/swapi" />
      </Provider>
    </>
  );
};

export default DoQuery;
