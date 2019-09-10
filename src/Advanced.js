import React from 'react';
import { ListItem, List, Heading } from 'spectacle';

const Advanced = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Advanced
      </Heading>

      <List>
        <ListItem>directives og middleware</ListItem>
        <ListItem>error handling</ListItem>
      </List>
    </>
  );
};

export default Advanced;
