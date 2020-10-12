import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import { AuthContext } from "../store/AuthProvider";
import { Box, Button, TextArea } from "grommet";

const IdentifyingFunds = () => {
  const [value, setValue] = React.useState(
    "To whom it may concern,\n\nPlease could you tell me which funds my pension is invested in?\nThank you.\n\nRegards,\n\n*Your name here*"
  );

  const history = useHistory();

  const { auth } = useContext(AuthContext);

  if (!auth.loading && auth.isAuthenticated) {
    return (
      <Layout>
        <PageHeading
          title="Identifying funds - Pension with current employer"
          subheading={`Your HR manager, or line manager if you do not have an HR department, is usually a good person to write to. We have suggested an email below which you can edit and either send from your email app by clicking on the button below, or copy and paste into your email.\n
          *Click and hold the bottom right corner of the text box if you would like to resize it.`}
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

export default IdentifyingFunds;
