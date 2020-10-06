import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Collapsible, Box, Button, Text, Grommet } from "grommet";
import { HelpOption } from "grommet-icons";
import { optionButton } from "../../theme";

const FundButton = ({ label, href, iconText }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box width="80%" align="center">
      {/* <Grommet theme={optionButton}> */}
      <Button
        info
        fill="horizontal"
        size="large"
        label={label}
        href={href}
        reverse={true}
        // color="dark-1"
      >
        <Link to={href} style={{ width: "100%" }} />
      </Button>
      {/* </Grommet> */}
      <Button
        alignSelf="end"
        plain
        onClick={() => setOpen(!open)}
        icon={<HelpOption />}
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
    </Box>
  );
};

export default FundButton;
