import { Box, Link, Stack, Typography } from "@mui/material";
import {
  UilFacebookF,
  UilInstagram,
  UilTwitter,
} from "@iconscout/react-unicons";
import typography from "../../theme/typography";
import { MainContainer } from "./main";

export default function Footer() {
  return (
    <MainContainer>
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
              href="https://www.facebook.com/wildannajahw/"
              target="_blank"
              rel="noreferrer"
              color="text.primary"
            >
              <UilFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/wildannajahw/"
              target="_blank"
              rel="noreferrer"
              color="text.primary"
            >
              <UilInstagram />
            </Link>
            <Link
              href="https://twitter.com/wildannajahw"
              target="_blank"
              rel="noreferrer"
              color="text.primary"
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
    </MainContainer>
  );
}
