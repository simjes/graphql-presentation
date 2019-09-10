import React from 'react';
import { Heading, List, ListItem, Notes } from 'spectacle';

const DefineSchema = () => {
  return (
    <>
      <Heading size={2} textColor="primary">
        Schema
      </Heading>

      <Notes>
        <List>
          <ListItem>Schema</ListItem>
          <ListItem>type</ListItem>
          <ListItem>input</ListItem>
          <ListItem>fragment</ListItem>
          <ListItem>interface</ListItem>
          <ListItem>union</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default DefineSchema;
