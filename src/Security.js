import React from 'react';
import { Heading, List, ListItem, Notes } from 'spectacle';

const Security = () => {
  return (
    <>
      <Heading size={4} textColor="primary">
        Security Concerns
      </Heading>

      <Notes>
        <List>
          <ListItem>DOS attack - complexity, drill down</ListItem>
          <ListItem>Directives and middleware</ListItem>
          <ListItem>Timeout, limit complexity and depth, throttle</ListItem>
          <ListItem>Authentication/Authorization</ListItem>
        </List>
      </Notes>

      {/* https://www.howtographql.com/advanced/4-security/ */}
    </>
  );
};

export default Security;
