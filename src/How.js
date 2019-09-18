import React from 'react';
import { Heading, Image, List, ListItem, Notes } from 'spectacle';
import Http from './assets/http.png';

const How = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        How
      </Heading>

      <Image src={Http} height="500" />

      <Notes>
        <List>
          <ListItem>Not HTTP status codes</ListItem>
          <ListItem>POST request - query in body</ListItem>
          <ListItem>Single endpoint - /graphql</ListItem>
          <ListItem>Gradual introduction</ListItem>
          <ListItem>Build on top of existing app code</ListItem>
        </List>
      </Notes>
    </>
  );
};

export default How;
