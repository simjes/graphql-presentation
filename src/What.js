import React from 'react';
import { ListItem, List, Heading } from 'spectacle';

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
    </>
  );
};

export default What;
