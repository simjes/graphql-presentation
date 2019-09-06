import React from 'react';
import { List, ListItem, Heading } from 'spectacle';

const Snacks = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        snacks
      </Heading>

      <List>
        <ListItem>prisma, hasura</ListItem>
        <ListItem>generate typings</ListItem>
        <ListItem>playground, graphiql</ListItem>
        <ListItem>Apollo, slipper da også redux - hva gjør apollo</ListItem>
      </List>
    </>
  );
};

export default Snacks;
