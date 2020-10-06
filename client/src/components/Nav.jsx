import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Anchor,
  Box,
  Grommet,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
  Text,
} from "grommet";
import { Close, Menu as MenuIcon, User } from "grommet-icons";
import Logout from "./Logout";

const StyledTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 400;
  padding: 0 0.5rem;
  z-index: 30;
  color: whitesmoke !important;
  &:hover {
    color: #81fced !important;
  }
`;

const StyledLink = styled(Link)`
  /* font-size: 2rem; */
  /* font-weight: 400; */
  padding: 0 0.5rem;
  /* z-index: 30; */
  color: whitesmoke !important;
  &:hover {
    color: #81fced !important;
  }
`;

const Navigation = () => {
  const [show, setShow] = useState(false);

  return (
    <Header background="dark-1" pad="medium">
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
                // size="large"
                // label=""
                // icon={<MenuIcon />}
                background="dark-1"
                // dropTarget='{Header}'
                dropBackground="dark-1"
                // dropProps={{
                //   align: { top: "top", left: "left" },
                //   elevation: "xlarge",
                //   background: "dark-1",
                //   top: 0,
                // }}
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
                    onClick: () => {},
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
                {/* <Box direction="row" gap="small" pad="medium">
                <MenuIcon />
              </Box> */}
                {({ drop, hover }) => {
                  // const color = hover && !drop ? "accent-3" : undefined;
                  return (
                    <Box
                      direction="row"
                      justify="end"
                      gap="small"
                      // pad="medium"
                      background={hover && drop ? "dark-1" : undefined}
                      style={{ padding: drop ? "0 20px" : "" }}
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
                <StyledLink to="#">My actions</StyledLink>
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
