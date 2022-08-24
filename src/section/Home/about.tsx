import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import typography from "../../theme/typography";
import useResponsive from "../../hooks/useResponsive";

export default function About() {

  // const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");
  return (
    <Box>
      <Typography
        sx={{
          ...(mdUp ? typography.h2 : typography.h3),
          textAlign: "center",
        }}
      >
        {" "}
        About me
      </Typography>
      <Typography
        sx={{
          color: "text.secondary",
          ...(mdUp ? typography.subtitle1 : typography.subtitle2),
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        My Introduction
      </Typography>
      <Box
        sx={{
          // display: "grid",
          // gap: "1.5rem",
          // maxWidth: "768px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          margin: "0 1.5rem",
        }}
      >
        <Image
          src="/img/about.jpg"
          alt="me"
          width="200"
          height="200"
          style={{
            borderRadius: ".5rem",
          }}
        />
      </Box>

      <Typography
        sx={{
          color: "text.secondary",
          ...typography.subtitle2,
          textAlign: "center",
          margin: "3rem",
        }}
      >
        Web develover, with extensive knowloedge and years of experience,
        working in web technologies and UI/UX design, delivering quality work.
      </Typography>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a href="pdf/Wildan-CV.pdf" download>
          <Button
            variant="contained"
            component="span"
            color="primary"
            sx={{
              padding: "1rem",
              // alignItems: "center",
              // display: "flex",
              // justifyContent: "center",
            }}
          >
            Download CV{" "}
            <UilDownloadAlt
              style={{
                marginLeft: ".5rem",
              }}
            />
          </Button>
        </a>
      </Box>
    </Box>
  );
}
