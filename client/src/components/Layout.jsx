import React from "react";
import Nav from "./Nav";
import { Box } from "grommet";

const Layout = ({ children }) => {
  return (
    <Box height="100vh">
      <Nav />
      <Box flex="grow">{children}</Box>
    </Box>
  );
};

export default Layout;
