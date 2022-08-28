/* eslint-disable react/require-default-props */
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import useResponsive from "../hooks/useResponsive";
import typography from "../theme/typography";

interface SectionProps {
  children: ReactNode;
  sx?: CSSProperties;
  title?: string;
  subtitle?: string;
}

const StyledSection = styled.div`
  padding: 2rem 0 2rem;
`;

export default function Section({
  children,
  sx,
  title,
  subtitle,
}: SectionProps) {
  const mdUp = useResponsive("up", "md");
  return (
    <StyledSection style={sx}>
      {title && (
        <Typography
          sx={{
            ...(mdUp ? typography.h3 : typography.h4),
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          sx={{
            color: "text.secondary",
            ...(mdUp ? typography.subtitle1 : typography.subtitle2),
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
      {children}
    </StyledSection>
  );
}
