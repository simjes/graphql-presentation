import React from 'react';
import { BlockQuote, Cite, Quote, Heading, List, ListItem } from 'spectacle';

const Why = () => {
  return (
    <>
      <Heading size={6} textColor="primary" caps>
        why
      </Heading>

      <List>
        <ListItem>ett endepunkt</ListItem>
        <ListItem>spør kun om dataen du trenger, alt i en request</ListItem>
        <ListItem>type safe api</ListItem>
        <ListItem>trenger ikke versjonere api (men kan)</ListItem>
        <ListItem>self documenting</ListItem>
        <ListItem>modent nok?</ListItem>
      </List>

      <BlockQuote>
        <Quote>noe fra prahql doc?</Quote>
        <Cite>Author</Cite>
      </BlockQuote>

      {/* <Heading size={6} textColor="primary" caps>
        Typography
      </Heading>

      <Heading size={1} textColor="secondary">
        Heading 1
      </Heading>

      <Heading size={2} textColor="secondary">
        Heading 2
      </Heading>

      <Heading size={3} textColor="secondary">
        Heading 3
      </Heading>

      <Heading size={4} textColor="secondary">
        Heading 4
      </Heading>

      <Heading size={5} textColor="secondary">
        Heading 5
      </Heading>

      <Text size={6} textColor="secondary">
        Standard text
      </Text> */}
    </>
  );
};

export default Why;
