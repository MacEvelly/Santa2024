import React from "react";
import styled from "styled-components";
import { Logo } from "../../../assets/";

export function Header() {
  return (
    <HeaderStyle>
      <h1>Christmas Crash</h1>
      <h2>Help santa find the presents</h2>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  background-color: #333;
  padding: 1rem;
  display: grid;
  grid-template-rows: min-content min-content;
  align-content: center;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  a {
    text-decoration: none;
    color: inherit;
  }
  > img {
    grid-row: 1 / -1;
    height: 3rem;
    padding-right: 1rem;
  }
  > h1 {
    display: flex;
    font-family: var(--MainFont);
    font-size: var(--TitleSize);
    align-items: center;
    b {
      font-weight: bold;
    }
  }
  > h2 {
    font-family: var(--TitleFont);
    font-size: var(--CopySize);
    color: #414141;
  }
`;
