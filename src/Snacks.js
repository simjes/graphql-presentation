import React from 'react';
import { List, ListItem, Heading } from 'spectacle';

const Snacks = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        snacks
      </Heading>

      <List>
        <ListItem>prisma, hasura</ListItem>
        <ListItem>generate typings</ListItem>
        <ListItem>playground, graphiql</ListItem>
        <ListItem>
          Apollo, slipper da også redux - hva gjør apollo
        </ListItem>{' '}
        {/* egen slide? gjør at graphql er lettere å sette opp. kan generere typings - alternativer: relay, draqula */}
      </List>
    </>
  );
};

export default Snacks;
