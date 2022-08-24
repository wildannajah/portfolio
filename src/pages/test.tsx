import { styled } from "@mui/material";
import React from "react";

export default function Test() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <ContentStyle>
      <h1>Test</h1>
    </ContentStyle>
  );
}

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.primary.main,
}));
