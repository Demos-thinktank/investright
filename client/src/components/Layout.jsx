import React from "react";
import Nav from "./Nav";
import { Box } from "grommet";

const Layout = ({ children }) => {
  return (
    <Box height="100vh">
      <Nav />
      <Box
        flex="grow"
        margin="auto"
        style={{ width: "100%" }}
        width={{ max: "1024px" }}
        pad="medium"
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
