import React, { useContext, useEffect } from "react";
import { AuthContext } from "../store/AuthProvider";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import Layout from "../components/Layout";
import { Box, Button, Text } from "grommet";
import { AddCircle, Down, Next } from "grommet-icons";
import Loading from "../components/Loading";
import { useRef } from "react";
import { useState } from "react";

const StyledIcon = styled(AddCircle)`
  width: 3rem;
  height: 3rem;
  &:hover {
    cursor: pointer;
  }
`;

const MyActions = () => {
  const { isLoggedIn, isLoading, isNotAuthenticated } = useContext(AuthContext);
  const climateRef = useRef(null);
  const financialRef = useRef(null);

  const [height, setHeight] = useState(0);

  useEffect(() => {
    const climateRefHeight =
      climateRef.current && climateRef.current.clientHeight;
    const financialRefHeight =
      financialRef.current && financialRef.current.clientHeight;

    climateRefHeight > financialRefHeight
      ? setHeight(climateRefHeight)
      : setHeight(financialRefHeight);
  }, [climateRef, financialRef]);

  if (isLoading) {
    return <Loading />;
  }

  if (isNotAuthenticated) {
    return <Redirect to="/" />;
  }

  if (isLoggedIn) {
    return (
      <Layout>
        <Box direction="row" justify="between" wrap="reverse">
          <Box direction="column" margin={{ right: "2rem" }}>
            <Text as="h1" size="xlarge" margin={{ top: "small", bottom: "0" }}>
              Your Results
            </Text>
            <Text
              as="h2"
              size="medium"
              weight="normal"
              margin={{ bottom: "small" }}
              style={{ whiteSpace: "pre-line" }}
            >
              Based on the funds you've told us about
            </Text>
            <Link
              to="#"
              style={{ fontSize: "0.8em", textDecoration: "underline" }}
            >
              How do we calculate these scores?
            </Link>
          </Box>
          <Box direction="row" justify="end" margin={{ left: "auto" }}>
            <Text
              as="h1"
              size="large"
              margin={{ top: "small", bottom: "small", right: "small" }}
            >
              Add new funds
            </Text>
            <Link to="/add-new-funds">
              <StyledIcon color="demosOrange" />
            </Link>
          </Box>
        </Box>
        <Box margin={{ vertical: "small" }}>
          <Text>
            On this page you can see a summary report on the climate and
            financial performance of your pensions and investments. For more
            detail and to take action, click on the relevant more details
            button. The climate figures are based on data from{" "}
            <Link
              to="#"
              style={{ fontSize: "0.8em", textDecoration: "underline" }}
            >
              Climetrics
            </Link>{" "}
            and the financial figures on data from{" "}
            <Link
              to="#"
              style={{ fontSize: "0.8em", textDecoration: "underline" }}
            >
              Refinitiv
            </Link>
            , both leading suppliers of data in their fields.{" "}
          </Text>
          <Text margin={{ vertical: "small" }}>
            Financial performance is rated from 1 to 5, where 1 is the best
            possible performance
          </Text>
          <Box
            margin={{ bottom: "small" }}
            direction="row"
            style={{ alignItems: "center" }}
          >
            <Text margin={{ right: "medium" }}>
              Climate performance is rated on the following scale:
            </Text>
            <Box
              direction="row"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Text
                margin={{ right: "small" }}
                size="small"
                style={{ fontStyle: "italic", textAlign: "right" }}
              >
                Best
                <br />
                performance
              </Text>
              <Box
                margin={{ horizontal: "xsmall" }}
                round="50%"
                background="#6aa84f"
                height="1.5rem"
                width="1.5rem"
              />
              <Box
                margin={{ horizontal: "xsmall" }}
                round="50%"
                background="#d7ea70"
                height="1.5rem"
                width="1.5rem"
              />
              <Box
                margin={{ horizontal: "xsmall" }}
                round="50%"
                background="#e69138"
                height="1.5rem"
                width="1.5rem"
              />
              <Box
                margin={{ horizontal: "xsmall" }}
                round="50%"
                background="#cc0000"
                height="1.5rem"
                width="1.5rem"
              />
              <Box
                margin={{ horizontal: "xsmall" }}
                round="50%"
                background="#660000"
                height="1.5rem"
                width="1.5rem"
              />
              <Text
                margin={{ left: "small" }}
                size="small"
                style={{ fontStyle: "italic" }}
              >
                Worst
                <br />
                performance
              </Text>
            </Box>
          </Box>
          <Text>
            Click on any climate or financial performance section to see more
            details
          </Text>
        </Box>
        <Box
          direction="column"
          border={{ color: "demosDark", size: "medium" }}
          pad="small"
          margin={{ bottom: "medium" }}
        >
          <Text margin={{ bottom: "small" }}>Your pensions with Demos</Text>
          <Box
            direction="column"
            border={{ color: "demosDark", size: "small" }}
          >
            <Box
              pad="xsmall"
              background="lightgrey"
              border={{
                color: "demosDark",
                size: "small",
                style: "solid",
                side: "bottom",
              }}
            >
              Pension scheme 1
            </Box>
            <div style={{ visibility: height ? "visible" : "hidden" }}>
              <Box height={height && `${height + 20}px`} />

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Asset manager 1
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    style={{ position: "absolute", top: `-${height + 20}px` }}
                    ref={climateRef}
                  >
                    <Text>
                      Climate
                      <br />
                      Performance
                    </Text>
                  </Box>
                  <Box
                    round="50%"
                    background="#d7ea70"
                    height="3rem"
                    width="3rem"
                  />
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                  weight="bold"
                >
                  <Text
                    ref={financialRef}
                    style={{
                      position: "absolute",
                      top: `-${height + 20}px`,
                      fontWeight: "normal",
                    }}
                  >
                    Financial
                    <br />
                    Performance
                  </Text>
                  3/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text size="0.6rem">
                    Based on average scores for this asset manager
                  </Text>
                </Box>
              </Box>

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Asset manager 2
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    round="50%"
                    background="#6aa84f"
                    height="3rem"
                    width="3rem"
                  ></Box>
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  weight="bold"
                >
                  1/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    icon={<Down color="plain" size="small" />}
                    label="See funds"
                    reverse={true}
                  ></Button>
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
        <Box
          direction="column"
          border={{ color: "demosDark", size: "medium" }}
          pad="small"
          margin={{ bottom: "medium" }}
        >
          <Text margin={{ bottom: "small" }}>Your personal pensions </Text>
          <Box
            direction="column"
            border={{ color: "demosDark", size: "small" }}
          >
            <Box
              pad="xsmall"
              background="lightgrey"
              border={{
                color: "demosDark",
                size: "small",
                style: "solid",
                side: "bottom",
              }}
            >
              Pension scheme 1
            </Box>
            <div style={{ visibility: height ? "visible" : "hidden" }}>
              <Box height={height && `${height + 20}px`} />

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Pension scheme 1
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    style={{ position: "absolute", top: `-${height + 20}px` }}
                  >
                    <Text>
                      Climate
                      <br />
                      Performance
                    </Text>
                  </Box>
                  <Box
                    round="50%"
                    background="#660000"
                    height="3rem"
                    width="3rem"
                  />
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                  weight="bold"
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: `-${height + 20}px`,
                      fontWeight: "normal",
                    }}
                  >
                    Financial
                    <br />
                    Performance
                  </Text>
                  3/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    icon={<Next color="plain" size="small" />}
                    label="Make changes"
                    reverse={true}
                  />
                </Box>
              </Box>

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Pension scheme 2
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    round="50%"
                    background="#d7ea70"
                    height="3rem"
                    width="3rem"
                  ></Box>
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  weight="bold"
                >
                  1/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    icon={<Down color="plain" size="small" />}
                    label="See funds"
                    reverse={true}
                  ></Button>
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
        <Box
          direction="column"
          border={{ color: "demosDark", size: "medium" }}
          pad="small"
          margin={{ bottom: "medium" }}
        >
          <Text margin={{ bottom: "small" }}>
            Your SIPPs and other invesments
          </Text>
          <Box
            direction="column"
            border={{ color: "demosDark", size: "small" }}
          >
            <Box
              pad="xsmall"
              background="lightgrey"
              border={{
                color: "demosDark",
                size: "small",
                style: "solid",
                side: "bottom",
              }}
            >
              Pension scheme 1
            </Box>
            <div style={{ visibility: height ? "visible" : "hidden" }}>
              <Box height={height && `${height + 20}px`} />

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Asset manager 1
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    style={{ position: "absolute", top: `-${height + 20}px` }}
                  >
                    <Text>
                      Climate
                      <br />
                      Performance
                    </Text>
                  </Box>
                  <Box
                    round="50%"
                    background="#d7ea70"
                    height="3rem"
                    width="3rem"
                  ></Box>
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                  weight="bold"
                >
                  <Text
                    style={{
                      position: "absolute",
                      top: `-${height + 20}px`,
                      fontWeight: "normal",
                    }}
                  >
                    Financial
                    <br />
                    Performance
                  </Text>
                  3/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    icon={<Next color="plain" size="small" />}
                    label="Request changes"
                    reverse={true}
                  />
                </Box>
              </Box>

              <Box
                direction="row"
                border={{
                  color: "demosDark",
                  size: "small",
                  style: "solid",
                  side: "all",
                }}
                pad="xsmall"
                margin="small"
              >
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Asset manager 2
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    round="50%"
                    background="#6aa84f"
                    height="3rem"
                    width="3rem"
                  ></Box>
                </Box>
                <Text
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  weight="bold"
                >
                  1/5
                </Text>
                <Box
                  style={{
                    width: "25%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    icon={<Down color="plain" size="small" />}
                    label="See funds"
                    reverse={true}
                  />
                </Box>
              </Box>
            </div>
          </Box>
        </Box>
        <Button label="Save my results" margin={{ right: "auto" }} />
      </Layout>
    );
  }
};

export default MyActions;
