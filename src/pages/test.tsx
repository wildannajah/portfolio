import { styled } from "@mui/material";
import React from "react";

export default function Test() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <ContentStyle>
      <h1>Test</h1>
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{
            width: "45%",
          }}
        >
          {" "}
          45%
        </div>
      </div>
    </ContentStyle>
  );
}

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.primary.main,
}));
