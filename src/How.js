import React from 'react';
import { List, ListItem, Heading, Notes } from 'spectacle';

const How = () => {
  return (
    <>
      <Heading size={3} textColor="primary">
        How TODO
      </Heading>

      <Notes>
        <List>
          <ListItem>Not HTTP status codes</ListItem>
          <ListItem>POST request - query in body</ListItem>
          <ListItem>Single endpoint - /graphql</ListItem>
          <ListItem>Gradually introduction</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default How;
