import { styled } from "@mui/material";

const Page = styled("div")(({ theme }) => ({
  paddingTop: "1rem",
  display: "grid",
  gap: "1rem",
  padding: "0 1.5rem",
  maxWidth: "768px",
  [theme.breakpoints.up("md")]: {
    padding: "0 auto",
  },
}));

export default Page;
