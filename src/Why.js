import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Heading,
  Link,
  List,
  ListItem,
  Notes,
  Quote,
} from 'spectacle';

const Why = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Why
      </Heading>

      <Appear>
        <BlockQuote>
          <Quote textSize="48" textColor="#0297fd">
            Instead of contorting our object graph to a relational system, what
            if we make it an object graph all the way from back to front
          </Quote>
          <Link href="https://youtu.be/783ccP__No8?t=452" target="_blank">
            <Cite textColor="#fd029c">Nick Schrock, GraphQL co-creator</Cite>
          </Link>
        </BlockQuote>
      </Appear>

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
