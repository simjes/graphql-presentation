import React from 'react';
import { Heading, Image, List, ListItem, Notes } from 'spectacle';
import SchemaExample from './assets/schema.png';

const Schema = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Schema
      </Heading>

      <Image src={SchemaExample} height="700" />

      <Notes>
        <List>
          <ListItem>Query</ListItem>
          <ListItem>User</ListItem>
          <ListItem>Required/Optional</ListItem>
          <ListItem>List + Nullable + Non empty</ListItem>
          <ListItem>Return</ListItem>
          <ListItem>Interface - fragments - others</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default Schema;
