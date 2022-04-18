import React from "react";
import { useAxiosGetRequest } from "../../hooks/axios-hook";
import { Paper, CircularProgress } from "@mui/material";
function AxiosComponent({
  fetchEndpoint,
  renderSuccess,
  loadingFallback = (
    <Paper
      sx={{
        p: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress></CircularProgress>
    </Paper>
  ),
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
}) {
  const { loading, data, error } = useAxiosGetRequest(fetchEndpoint);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}

export default AxiosComponent;
