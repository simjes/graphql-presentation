import React from 'react';
import { List, ListItem, Heading } from 'spectacle';

const DefineSchema = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        define schema
      </Heading>

      <List>
        <ListItem>definere skjema</ListItem>
        <ListItem>type, query, mutation, subs, fragments?</ListItem>
        <ListItem>Generert skjema fra prisma</ListItem>
      </List>
    </>
  );
};

export default DefineSchema;
