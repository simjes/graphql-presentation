import React from 'react';
import { Heading, Text } from 'spectacle';

const Landing = () => {
  return (
    <>
      <Heading size={1} fit lineHeight={1} textColor="primary">
        GraphQL
      </Heading>

      <Text margin="10px 0 0" textColor="secondary" size={1} bold>
        A query language for your API
      </Text>
    </>
  );
};

export default Landing;
