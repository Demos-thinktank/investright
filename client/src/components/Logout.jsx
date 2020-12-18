import React from "react";
import { Box, Button, Layer, Text } from "grommet";
import styled from "styled-components";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { getFromStorage, removeFromStorage } from "../utils/storage";

const StyledLayer = styled(Layer)`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: max-content;
`;

const Logout = ({ setShow }) => {
  async function handleLogout(e) {
    e.preventDefault();
    const localStorageToken = await getFromStorage("Investright");
    const config = {
      headers: { Authorization: `Bearer ${localStorageToken}` },
    };
    axios
      .post("/api/account/logout", {}, config)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => removeFromStorage("Investright"))
      .then(() => window.location.reload())
      .catch(console.log);
  }

  return (
    <>
      <StyledLayer animation="fadeIn" full={true} position="center">
        <Box
          align="center"
          justify="around"
          direction="column"
          elevation="medium"
          gap="xsmall"
          pad="large"
          round="small"
          animation={{
            type: "zoomIn",
            delay: 0,
            duration: 1000,
            size: "xsmall",
          }}
          background="light-1"
        >
          <Text>Are you sure you want to logout?</Text>
          <Box
            direction="row"
            gap="medium"
            justify="center"
            margin={{ top: "medium", bottom: "small" }}
          >
            <StyledButton primary label="Yes I'm sure" onClick={handleLogout} />
            <StyledButton alert label="Cancel" onClick={() => setShow(false)} />
          </Box>
          <StyledButton
            fill="horizontal"
            disabled
            label="Logout from all devices"
          />
        </Box>
      </StyledLayer>
    </>
  );
};

export default withRouter(Logout);
