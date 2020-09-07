import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed", location.pathname);
  }, [location]);
  return (
    <>
      {location.pathname !== "/" ? (
        <nav>
          <p>% Investright</p>
          <ul>
            <li>About us </li>
            <li>Contact us </li>
            <li>How we calculate scores </li>
            <li>My actions</li>
          </ul>
        </nav>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
