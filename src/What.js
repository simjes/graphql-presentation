import React from 'react';
import { ListItem, List, Heading, Notes, Appear } from 'spectacle';

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
          <ListItem>Type system</ListItem>
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
