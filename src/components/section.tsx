/* eslint-disable react/require-default-props */
import styled from "@emotion/styled";
import { CSSProperties, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  sx?: CSSProperties;
}

const StyledSection = styled.div`
  padding: 2rem 0 2rem;
`;

export default function Section({ children, sx }: SectionProps) {
  return <StyledSection style={sx}>{children}</StyledSection>;
}
