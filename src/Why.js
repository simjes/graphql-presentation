import React from 'react';
import { Heading, List, ListItem, Notes } from 'spectacle';

const Why = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        why
      </Heading>

      <List>
        <ListItem>spør kun om dataen du trenger, alt i en request</ListItem>
        <ListItem>type safe api</ListItem>
        <ListItem>self documenting</ListItem>
      </List>

      <Notes>
        <List>
          <ListItem>Facebook mobile problems</ListItem>
          <ListItem>Common problem in the industry - Airbnb</ListItem>
          <ListItem>
            Vending machine - https://youtu.be/783ccP__No8?t=658
          </ListItem>
        </List>
      </Notes>
    </>
  );
};

export default Why;
