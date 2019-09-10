import React from 'react';
import { List, ListItem, Heading, Notes } from 'spectacle';

const How = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        how
      </Heading>

      <List>
        <ListItem>http, json</ListItem>
        <ListItem>ikke http status codes, text i body, post</ListItem>
        <ListItem>single endpoint /graphql</ListItem>
        <ListItem>stegvis intro</ListItem>
        <ListItem>eget type sys</ListItem>
      </List>

      <Notes>
        <List>
          <ListItem>da</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default How;
