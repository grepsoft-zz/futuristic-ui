import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const focusIn = keyframes`
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
`;

const Text = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: 0.2rem;
  opacity: 0%;
  animation: ${focusIn} 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;

export const Title = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};
