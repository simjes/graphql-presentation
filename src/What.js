import React from 'react';
import { ListItem, List, Heading, Notes } from 'spectacle';

const What = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        what
      </Heading>

      <List>
        <ListItem>query, mutation, sub</ListItem>
      </List>

      <Notes>
        <List>
          <ListItem>Released as a specification</ListItem>
          <ListItem>Type safe api</ListItem>
          <ListItem>Self documenting</ListItem>
          <ListItem>Three ways to talk to the API</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default What;
