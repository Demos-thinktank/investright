import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Tip } from "grommet";
import { HelpOption } from "grommet-icons";
import styled from "styled-components";

const FundButton = ({ label, href, iconText }) => {
  const history = useHistory();

  const FundButton = styled(Button)`
    width: 90%;
  `;

  return (
    <Box width="80%" align="center" margin={{ top: "1rem", bottom: "1rem" }}>
      <Box width="100%" align="center" direction="row">
        <FundButton
          secondary
          fundButton
          fill="horizontal"
          size="large"
          label={label}
          onClick={() => history.push(href)}
          reverse={true}
        />
        {iconText && (
          <Tip
            plain
            content={
              <Box
                width="80%"
                pad="xsmall"
                margin="small"
                round="small"
                background={{
                  color: "demosDark",
                  dark: true,
                }}
                border={{
                  color: "demosDark",
                  size: "medium",
                  style: "dashed",
                  side: "all",
                }}
              >
                {iconText}
              </Box>
            }
          >
            <Button tooltip icon={<HelpOption color="#1d3336" />} />
          </Tip>
        )}
      </Box>
    </Box>
  );
};

export default FundButton;
