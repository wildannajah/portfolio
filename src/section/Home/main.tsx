/* eslint-disable @typescript-eslint/no-use-before-define */

import { Box, Button, Link, styled, Typography } from "@mui/material";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilMessage,
} from "@iconscout/react-unicons";
import typography from "../../theme/typography";
import useResponsive from "../../hooks/useResponsive";

export const MainContainer = styled("div")(({ theme }) => ({
  paddingTop: "1rem",
  display: "grid",
  gap: "1rem",
  margin: "0 1.5rem",
  maxWidth: "768px",
  [theme.breakpoints.up("md")]: {
    margin: "0 auto",
  },
}));

export default function Main() {
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");
  return (
    <MainContainer>
      <Box
        gridTemplateColumns={smUp ? "max-content 1fr 1fr" : ".5fr 3fr"}
        paddingTop={smUp ? "5rem" : "3.5rem"}
        paddingBottom={smUp ? "5rem" : "3.5rem"}
        alignItems="center"
        display="grid"
        gap="1.5rem"
      >
        <Socials>
          <Link
            href="https://www.linkedin.com/in/wildan-wildiansyah-3b3a68171/"
            target="_blank"
            rel="noreferrer"
          >
            <UilLinkedinAlt />
          </Link>
          <Link
            href="https://github.com/wildannajahw"
            target="_blank"
            className="home__social-icon"
            rel="noreferrer"
          >
            <UilGithubAlt />
          </Link>
        </Socials>
        <div>
          <Blob
            viewBox="0 0 200 187"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <mask id="mask0" mask-type="alpha">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
              />
              <image
                style={{
                  width: "170px",
                }}
                x="12"
                y="18"
                xlinkHref="/img/perfil.png"
              />
            </g>
          </Blob>
        </div>
        <Identity>
          <Typography
            sx={{
              ...(mdUp ? typography.h2 : typography.h3),
            }}
          >
            Hi, I&apos;m Wildan
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              ...(mdUp ? typography.h5 : typography.h6),
              marginBottom: "1rem",
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              ...(mdUp ? typography.subtitle1 : typography.subtitle2),
            }}
          >
            High level experience in web design and knowledge with a high level
            of attention to detail.
          </Typography>
          <br />
          <Link href="https://wa.me/6285156443913" target="_blank">
            <Button
              variant="contained"
              component="span"
              color="primary"
              sx={{
                padding: "1rem",
              }}
            >
              Contact Me{" "}
              <UilMessage
                style={{
                  marginLeft: ".5rem",
                }}
              />
            </Button>
          </Link>
        </Identity>
        <br />
      </Box>
    </MainContainer>
  );
}
const Socials = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "max-content",
  rowGap: "1rem",
  [theme.breakpoints.up("sm")]: {
    gridColumn: "initial",
    order: "-1",
  },
  [theme.breakpoints.up("md")]: {
    transform: "translateX(-4rem)",
  },
}));

const Blob = styled("svg")(({ theme }) => ({
  width: "200px",
  fill: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    width: "270px",
  },
  [theme.breakpoints.up("md")]: {
    width: "320px",
  },
}));

const Identity = styled("div")(({ theme }) => ({
  gridColumn: "1/3",

  [theme.breakpoints.up("sm")]: {
    gridColumn: "initial",
    marginRight: "3rem",
    order: "-1",
  },
}));
