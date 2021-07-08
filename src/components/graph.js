import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRandomInt } from "../utils/utils";

const Container = styled.div`
  position: absolute;
  left: 1%;
  opacity: 0.5;
`;

export const Graph = ({ w, h, viewBox, ht }) => {
  const [d1, setD1] = useState(
    "M 10 0 V 200 M 50 0 V 200  M 90 0 V 200 M 130 0 V 200 M 170 0 V 200"
  );
  const [graphColor, setGraphColor] = useState("rgba(255,255,255,0.95)");

  useEffect(() => {
    const interval = setInterval(() => {
      setD1(
        `M 10 0 V ${getRandomInt(0, 200)} M 50 0 V ${getRandomInt(
          0,
          150
        )}  M 90 0 V ${getRandomInt(0, 180)} 
        M 130 0 V ${getRandomInt(0, 200)} M 170 0 V ${getRandomInt(0, 200)}`
      );
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setGraphColor(
        `rgba(${getRandomInt(0, 255)},
        ${getRandomInt(0, 255)},
        ${getRandomInt(0, 255)}, 0.98)`
      );
    }, 500);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Container>
      <svg viewBox={viewBox} width={w} height={h}>
        <path
          id="graph1"
          d={d1}
          stroke={graphColor}
          strokeWidth="16"
          strokeDasharray="2 2 4"
          fill="none"
          style={{
            transition: "d 0.25s, stroke 2s"
          }}
        />
      </svg>
    </Container>
  );
};
