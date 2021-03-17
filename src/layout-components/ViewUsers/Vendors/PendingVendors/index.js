import React, { useState } from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../Page";
import Toolbar from "../../../Toolbar";
import Results from "./Results";
import data from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const PendingVendors = () => {
  const classes = useStyles();
  const [PendingVendorsData] = useState(data);
  const [count] = useState(data.count);

  return (
    <Page className={classes.root} title="Pending Vendors">
      <Container maxWidth={false}>
        <Toolbar componentTitle="Pending Vendors" />
        <Box mt={3}>
          {/* <Results PendingVendors={PendingVendors} /> */}
          <Results PendingVendors={PendingVendorsData} count={count} />
        </Box>
      </Container>
    </Page>
  );
};

export default PendingVendors;
