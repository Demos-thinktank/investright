import React from "react";
import { Text } from "grommet";

const PageHeading = ({ title, subheading }) => {
  return (
    <>
      <Text as="h1" size="xlarge" margin={{ top: "small", bottom: "medium" }}>
        {title}
      </Text>
      {subheading && (
        <Text
          as="h2"
          size="medium"
          weight="normal"
          margin={{ bottom: "medium" }}
          style={{ whiteSpace: "pre-line" }}
        >
          {subheading}
        </Text>
      )}
    </>
  );
};

export default PageHeading;
