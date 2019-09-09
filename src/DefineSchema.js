import React from 'react';
import { Heading, Text, ListItem, List, Notes } from 'spectacle';

const DefineSchema = () => {
  return (
    <>
      <Heading size={2} textColor="primary" caps>
        Building blocks
      </Heading>

      <Text margin="10px 0 0" textColor="primary" size={1} bold>
        Schema
      </Text>

      {/* <List>
        <ListItem>definere skjema</ListItem>
        <ListItem>type, query, mutation, subs, fragments?</ListItem>
        <ListItem>Generert skjema fra prisma</ListItem>
      </List> */}

      <Notes>
        <List>
          <ListItem>type</ListItem>
          <ListItem>input</ListItem>
          <ListItem>fragment</ListItem>
          <ListItem>interface</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default DefineSchema;
