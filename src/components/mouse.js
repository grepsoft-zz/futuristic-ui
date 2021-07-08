import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  border: 1px solid #00adb5;
  padding: 4px 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px #aaa;
  min-width: 150px;
`;

const Text = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.5rem;
  opacity: 0.75;
  color: #00adb5;
`;

export const Mouse = ({ x, y }) => {
  return (
    <Container>
      <Text>
        [{x}, {y}]
      </Text>
    </Container>
  );
};
