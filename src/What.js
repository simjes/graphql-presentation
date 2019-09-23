import React from 'react';
import { Appear, Heading, List, ListItem, Notes } from 'spectacle';

const What = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        What
      </Heading>

      <List>
        <Appear>
          <ListItem>Self documenting API</ListItem>
        </Appear>

        <Appear>
          <ListItem>Types</ListItem>
        </Appear>

        <Appear>
          <ListItem>Query, Mutation, Subscription</ListItem>
        </Appear>

        <Appear>
          <ListItem>Resolvers</ListItem>
        </Appear>
      </List>

      <Notes>
        <List>
          <ListItem>Is a specification</ListItem>
          <ListItem>Self documenting - playground</ListItem>
          <ListItem>Type safe - validates correct use</ListItem>
          <ListItem>Three ways to talk to the API</ListItem>
          <ListItem>Resolvers</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default What;
