import React from "react";
import { Box, Text } from "grommet";

const PageHeading = ({ title, subheading }) => {
  return (
    <Box width={{"max": "90vw"}}>
      <Text as="h1" size="xlarge" margin={{ top: "small", bottom: subheading ? "small" : 'medium' }}>
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
    </Box>
  );
};

export default PageHeading;
