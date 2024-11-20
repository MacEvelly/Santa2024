import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: #333;
  padding: 1rem;
  font-family: var(--TitleFont);
  font-weight: 400;
  font-style: normal;
  font-size: var(--CopySize);
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  text-align: right;
  > a {
    color: inherit;
    text-decoration: none;
  }
`;

export function Footer() {
  return (
    <FooterStyle>
      Presents still lost: <span>8</span>
    </FooterStyle>
  );
}
