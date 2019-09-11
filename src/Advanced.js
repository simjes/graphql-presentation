import React from 'react';
import { ListItem, List, Heading, Notes, Appear } from 'spectacle';

const Advanced = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Advanced
      </Heading>

      <List>
        <Appear>
          <ListItem>Security concerns</ListItem>
        </Appear>

        <Appear>
          <ListItem>Directives & middleware</ListItem>
        </Appear>

        <Appear>
          <ListItem>3. party APIs</ListItem>
        </Appear>
      </List>

      <Notes>
        <List>
          <ListItem>DOS attack - complexity, drill down</ListItem>
          <ListItem>Timeout, limit complexity and depth, throttle</ListItem>
          <ListItem>Authorization</ListItem>
          <ListItem>Connect backend - frontend use same api</ListItem>
        </List>
      </Notes>

      {/* https://www.howtographql.com/advanced/4-security/ */}
    </>
  );
};

export default Advanced;
