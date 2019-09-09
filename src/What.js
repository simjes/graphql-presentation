import React from 'react';
import { ListItem, List, Heading, Notes } from 'spectacle';

const What = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        what
      </Heading>

      <List>
        <ListItem>en spec</ListItem>
        <ListItem>schema, typer</ListItem>
        <ListItem>query, mutation, sub</ListItem>
      </List>

      <Notes>
        <List>
          <ListItem>Request only the data you need</ListItem>
          <ListItem>Type safe api</ListItem>
          <ListItem>Self documenting</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default What;
