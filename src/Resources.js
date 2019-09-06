import React from 'react';
import { ListItem, List, Heading } from 'spectacle';

const Resources = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        resources
      </Heading>

      <List>
        <ListItem>spec link</ListItem>
        <ListItem>link til documentary</ListItem>
        <ListItem>gode intro links</ListItem>
        <ListItem>gode example links, med one click setup i heroku</ListItem>
      </List>
    </>
  );
};

export default Resources;
