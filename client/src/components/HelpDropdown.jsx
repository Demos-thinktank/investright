import { Box, Button, Collapsible, Text } from "grommet";
import { HelpOption } from "grommet-icons";
import React from "react";

const HelpDropdown = ({ iconText, handleClick, open }) => {
  return (
    <>
      {iconText && (
        <>
          <Button
            alignSelf="end"
            plain
            onClick={handleClick}
            icon={<HelpOption color="#1d3336" />}
            reverse={true}
          />
          <Box align="end" width="100%">
            <Collapsible open={open}>
              <Box
                background="light-2"
                round="medium"
                pad="medium"
                justify="center"
              >
                <Text size="small">{iconText}</Text>
              </Box>
            </Collapsible>
          </Box>
        </>
      )}
    </>
  );
};

export default HelpDropdown;
