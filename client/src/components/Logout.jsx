import React, { useState } from "react";
import { Box, Button, Layer, Text } from "grommet";
import styled from "styled-components";
import { StatusGood } from "grommet-icons";
import axios from "axios";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import { getFromStorage, removeFromStorage } from "../utils/storage";

const StyledLayer = styled(Layer)`
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  /* padding: 0.2rem 0.5rem; */
  width: max-content;
`;

const Logout = ({ setShow, history }) => {
  const [loggedOut, setLoggedOut] = useState(false);

  //   const history = useHistory();

  async function handleLogout(e) {
    e.preventDefault();
    // console.log(e);
    const localStorageToken = await getFromStorage("Investright");
    const config = {
      headers: { Authorization: `Bearer ${localStorageToken}` },
    };
    // console.log("config", config);
    axios
      .post("/api/account/logout", {}, config)
      .then((res) => {
        console.log(res.data);
      })
      .then(() => removeFromStorage("Investright"))
      //   .then(() => history.push("/"))
      .then(() => window.location.reload())
      .catch(console.log);
  }

  return (
    <>
      {/* {show && ( */}
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
          {/* <br /> */}
          {/* <StatusGood color="status-ok" size="xlarge" /> */}
          {/* <Text>Continue to add new funds</Text> */}
          <Box
            direction="row"
            gap="medium"
            justify="center"
            margin={{ top: "medium", bottom: "small" }}
          >
            <StyledButton label="Yes I'm sure" onClick={handleLogout} />
            <StyledButton label="Cancel" onClick={() => setShow(false)} />
          </Box>
          {/* <br /> */}
          <StyledButton
            fill="horizontal"
            disabled
            label="Logout from all devices"
            //   onClick={() => setShow(false)}
          />
        </Box>
      </StyledLayer>
      {/* {loggedOut && <Redirect to="/" />} */}
      {/* // )} */}
    </>
  );
};

export default withRouter(Logout);
