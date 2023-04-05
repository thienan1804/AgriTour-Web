// External
import React from "react";
import { Grid } from "@mui/material";
// Internal
import DefaultLayout from "../../components/DefaultLayout";
import NewsBodyPage from "./NewsBody/NewsBodyPage";

const NewsPage = () => {
  return (
    <Grid>
      <DefaultLayout body={<NewsBodyPage />} />
    </Grid>
  );
};

export default NewsPage;
