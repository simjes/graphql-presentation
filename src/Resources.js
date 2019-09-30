import React from 'react';
import { Heading, Text } from 'spectacle';
import { CustomLink } from './common';

const Resources = () => {
  return (
    <>
      <Heading size={6} textColor="primary">
        Resources
      </Heading>

      <Text>
        <CustomLink
          href="https://graphql.org/"
          target="_blank"
        >
          Graphql.org
        </CustomLink>
      </Text>


      <Text>
        <CustomLink href="https://graphql.org/code/" target="_blank">
          Language support
        </CustomLink>
      </Text>

      <Text>
        <CustomLink
          href="https://www.youtube.com/watch?v=783ccP__No8"
          target="_blank"
        >
          Documentary
        </CustomLink>
      </Text>

      <Text>
        <CustomLink
          href="https://github.com/APIs-guru/graphql-apis"
          target="_blank"
        >
          Public dev apis
        </CustomLink>
      </Text>

      <Text>
        <CustomLink
          href="https://graphql.github.io/graphql-spec/June2018/"
          target="_blank"
        >
          Specification
        </CustomLink>
      </Text>
    </>
  );
};

export default Resources;
