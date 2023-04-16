// External files
import React from "react";
import { Grid } from "@mui/material";
// Internal files
import DefaultLayout from "../../components/DefaultLayout";
import BodyHomePage from "../home/BodyHomePage/BodyHomePage";
// Styles

const PreviewPage = () => {
  return (
    <Grid>
      <DefaultLayout body={<BodyHomePage />} />
    </Grid>
  );
};

export default PreviewPage;
