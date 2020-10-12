import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../store/AuthProvider";
import { Box, Button, Text, TextArea } from "grommet";

const IdentifyingInvestments = () => {
  const [value, setValue] = React.useState(
    "Dear xxxx,\n\nPlease could you send me a list of all the funds I have investments in. Thank you.\n\nYours sinceely\n\nXXXX"
  );

  const history = useHistory();

  const { auth } = useContext(AuthContext);

  if (!auth.loading && auth.isAuthenticated) {
    return (
      <Layout>
        <PageHeading
          title="Add new funds - Non pension investments and SIPPs"
          subheading="If you have a financial advisor or stockbroker, you may want to ask your them for a list of the funds you have investments in. Here is a suggested email which you can edit and send via your email app by clicking on the button below."
        />
        <Box height={{ min: "medium" }}>
          <TextArea
            placeholder="type here"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            size="medium"
            fill={true}
          />
        </Box>
        <Button label="Open in email app" disabled></Button>
        <Text margin={{ top: "small", bottom: "small" }}>
          If you don't have a financial advisor or stockbroker, and cannot tell
          us which funds you have invested in, we will unfortunately be unable
          to calculate the performance of these funds. A list of financial
          advisors can be found{" "}
          <a href="https://moneysupermarket.com" target="blank">
            here
          </a>{" "}
          - note these are not endorsed by Investright.
        </Text>
        <Button
          secondary
          label="Take me to my funds page"
          onClick={() => history.push("/profile")}
        />
      </Layout>
    );
  }

  if (!auth.loading && !auth.isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (auth.loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default IdentifyingInvestments;
