import { Box, Link, Stack, Typography } from "@mui/material";
import {
  UilFacebookF,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";
import typography from "../../theme/typography";

export default function Footer() {
  return (
    <Stack marginBottom="3rem" spacing={5}>
      <Stack
        justifyContent="space-between"
        direction={{ xs: "column", sm: "row" }}
        spacing={5}
      >
        <Box>
          <Typography
            sx={{
              ...typography.h3,
            }}
          >
            Wildan
          </Typography>
          <Typography
            sx={{
              ...typography.subtitle2,
            }}
          >
            Frontend Developer
          </Typography>
        </Box>

        <Stack direction="row" spacing={2}>
          <Link
            href="https://github.com/wildannajahw"
            target="_blank"
            rel="noreferrer"
          >
            <UilFacebookF />
          </Link>
          <Link
            href="https://github.com/wildannajahw"
            target="_blank"
            rel="noreferrer"
          >
            <UilInstagram />
          </Link>
          <Link
            href="https://github.com/wildannajahw"
            target="_blank"
            rel="noreferrer"
          >
            <UilTwitter />
          </Link>
        </Stack>
      </Stack>

      <Typography
        sx={{
          textAlign: "center",
          ...typography.subtitle2,
          color: "text.secondary",
        }}
      >
        © Wildan. Allright reserved
      </Typography>
    </Stack>
  );
}
