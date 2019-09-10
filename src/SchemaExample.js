import React from 'react';
import Schema from './assets/schema.png';
import { Image, ListItem, List, Notes } from 'spectacle';

const SchemaExample = () => {
  return (
    <>
      <Image src={Schema} height="700" />

      <Notes>
        <List>
          <ListItem>Query</ListItem>
          <ListItem>User</ListItem>
          <ListItem>Required/Optional</ListItem>
          <ListItem>List + Nullable + Non empty</ListItem>
          <ListItem>Return</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default SchemaExample;
