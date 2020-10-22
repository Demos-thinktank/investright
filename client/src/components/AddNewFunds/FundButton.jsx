import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Collapsible, Box, Button, Text } from "grommet";
import { HelpOption } from "grommet-icons";

const FundButton = ({ label, href, iconText }) => {
  const [open, setOpen] = useState(false);

  const history = useHistory();

  return (
    <Box width="80%" align="center" margin={{top: '1rem', bottom: '1rem'}}>
      <Box width="100%" align="center" direction="row">
        <Button
          secondary
          fundButton
          fill="horizontal"
          size="large"
          label={label}
          onClick={() => history.push(href)}
          reverse={true}         
          // hoverIndicator={}
          // color="dark-1"
        />
        {/* {iconText && ( */}
        <Button
          alignSelf="end"
          plain
          onClick={() => setOpen(!open)}
          icon={<HelpOption color="#1d3336" />}
          reverse={true}
        />
        {/* )} */}
      </Box>
      <Collapsible open={open}>
        <Box background="light-2" round="medium" pad="medium" justify="center">
          <Text size="small">{iconText}</Text>
        </Box>
      </Collapsible>
    </Box>
  );
};

export default FundButton;
