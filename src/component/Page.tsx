import styled from "@emotion/styled";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const PageStyled = styled.div`
  margin: 0;
`;

export default function Page({ children }: PageProps) {
  return <PageStyled>{children}</PageStyled>;
}
