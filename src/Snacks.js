import React from 'react';
import { List, ListItem, Heading, Notes } from 'spectacle';

const Snacks = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Snacks for JavaScript devs
      </Heading>

      <List>
        <ListItem>Apollo</ListItem>
        <ListItem>Prisma, Hasura</ListItem>
        <ListItem>Generate typings</ListItem>
        <ListItem>Playground, Graphiql</ListItem>
      </List>

      <Notes>
        <List>
          <ListItem>Apollo made GraphQL easy - alternative Relay</ListItem>
          <ListItem>Services to define model and generate schema</ListItem>
          <ListItem>Can generate typings from schema</ListItem>
          <ListItem>Test and view documentation of API</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default Snacks;
