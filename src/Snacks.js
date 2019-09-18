import React from 'react';
import { Appear, Heading, List, ListItem, Notes } from 'spectacle';

const Snacks = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Snacks for Devs
        <span role="img" aria-label="Ice cream emoji">
          🍧
        </span>
      </Heading>

      <List>
        <Appear>
          <ListItem>Apollo</ListItem>
        </Appear>

        <Appear>
          <ListItem>Prisma, Hasura</ListItem>
        </Appear>

        <Appear>
          <ListItem>Generate typings</ListItem>
        </Appear>

        <Appear>
          <ListItem>Playground, GraphiQL</ListItem>
        </Appear>
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
