import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Box, Header, Nav, Menu, ResponsiveContext } from "grommet";
import { Close, Menu as MenuIcon } from "grommet-icons";
import Logout from "./Logout";

const StyledTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  padding: 0 0.5rem;
  z-index: 30;
  color: whitesmoke !important;
  &:hover {
    color: #ee7155 !important;
  }
`;

const StyledLink = styled(Link)`
  padding: 0 0.5rem;
  color: whitesmoke !important;
  &:hover {
    color: #ee7155 !important;
  }
`;

const Navigation = () => {
  const [show, setShow] = useState(false);

  const history = useHistory();

  return (
    <Header background="#15343a" pad="medium">
      <Box direction="row" align="center" gap="small">
        <StyledTitle to="/profile">% Investright</StyledTitle>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" || responsive === "medium" ? (
            <>
              <Menu
                plain
                style={{ top: 0 }}
                background="#15343a"
                dropBackground="#15343a"
                items={[
                  {
                    label: "About us",
                    onClick: () => {},
                    margin: {
                      top: "large",
                      bottom: "xsmall",
                      left: "xsmall",
                      right: "xsmall",
                    },
                    // hoverIndicator: {
                    //   color: "#8f8f8f",
                    // },
                    // nav: "nav",
                    // as: "StyledLink",
                  },
                  {
                    label: "How we calculate scores",
                    onClick: () => {},
                    margin: "xsmall",
                  },
                  {
                    label: "Contact us",
                    onClick: () => {},
                    margin: "xsmall",
                  },
                  {
                    label: "My actions",
                    onClick: () => history.push("/my-actions"),
                    margin: "xsmall",
                  },
                  {
                    label: "Profile",
                    // icon: <User color="inherit" />,
                    onClick: () => {},
                    margin: "xsmall",
                  },
                  {
                    label: "Logout",
                    // icon: <Logout />,
                    onClick: () => {
                      setShow(true);
                    },
                    margin: "xsmall",
                  },
                ]}
              >
                {({ drop, hover }) => {
                  return (
                    <Box
                      direction="row"
                      justify="end"
                      gap="small"
                      background={hover && drop ? "#15343a" : undefined}
                      style={{
                        padding: drop ? "0 20px" : "",
                        backgroundColor: "#15343a",
                        color: "#ee7155 !important",
                      }}
                    >
                      {drop ? <Close /> : <MenuIcon />}
                    </Box>
                  );
                }}
              </Menu>
              {show && <Logout show={show} setShow={setShow} />}
            </>
          ) : (
            <>
              <Nav direction="row">
                <StyledLink to="#">About us</StyledLink>
                <StyledLink to="#">How we calculate scores</StyledLink>
                <StyledLink to="#">Contact us</StyledLink>
                <StyledLink to="/my-actions">My actions</StyledLink>
                <StyledLink to="#">Profile</StyledLink>
                <StyledLink
                  to="#"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Logout
                </StyledLink>
              </Nav>
              {show && <Logout show={show} setShow={setShow} />}
            </>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};

export default Navigation;
