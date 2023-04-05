// External files
import React from "react";
import { Grid } from "@mui/material";
// Internal files
import DefaultLayout from "../../components/DefaultLayout";
import Body from "../home/Body";
// Styles

const PreviewPage = () => {
  return (
    <Grid>
      <DefaultLayout body={<Body />} />
    </Grid>
  );
};

export default PreviewPage;
