import React from 'react';
import { List, ListItem, Heading } from 'spectacle';

const How = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        how
      </Heading>

      <List>
        <ListItem>http, json</ListItem>
        <ListItem>ikke http status codes, text i body, post</ListItem>
        <ListItem>single endpoint /graphql</ListItem>
        <ListItem>stegvis intro</ListItem>
        <ListItem>eget type sys</ListItem>
      </List>
    </>
  );
};

export default How;
