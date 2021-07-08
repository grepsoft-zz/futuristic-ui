import styled from "styled-components";
import { useEffect, useState } from "react";
import { Circle } from "./circle";
import { getRandomInt } from "../utils/utils";

const StyledCore = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Core = ({ dimens, viewBox, isHovered }) => {
  const w = dimens.w;
  const h = dimens.h;

  const cx = w / 2 || 0;
  const cy = h / 2 || 0;
  const radius = 100;

  const [da1, setDa1] = useState("44 2 6");
  const [da2, setDa2] = useState("94 164");
  const [coreColor, setCoreColor] = useState("rgba(255,255,255,0.95)");

  useEffect(() => {
    setTimeout(() => {
      setDa1(`${getRandomInt(50, 100)} 2 0`);
      setTimeout(() => {
        setDa1(`44 ${getRandomInt(0, 10)} ${getRandomInt(2, 10)}`);
      }, 500);
    }, 20);

    setTimeout(() => {
      setDa2(`${getRandomInt(5, 100)} 164`);
    }, 20);
  }, [isHovered]);

  useEffect(() => {
    const id = setInterval(() => {
      setCoreColor(
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
    <StyledCore>
      <svg viewBox={viewBox} width={w} height={h}>
        <Circle
          cx={cx}
          cy={cy}
          strokeColor={coreColor}
          strokeWidth={16}
          radius={radius}
          dashArray="6 2"
          style={{
            transition: "stroke 1s ease"
          }}
        />
        <Circle
          cx={cx}
          cy={cy}
          strokeColor={"rgba(10,189,227,0.85)"}
          strokeWidth={8}
          radius={radius}
          dashArray={"8 70 6"}
        />
        <Circle
          cx={cx}
          cy={cy}
          strokeColor={"rgba(80,219,251,0.8)"}
          strokeWidth={6}
          radius={radius - 20}
          style={{
            strokeDasharray: da1,
            strokeDashoffset: 14,
            transition:
              "stroke-dashoffset 2.5s ease 0s, stroke-dasharray 1s ease 0s, stroke 2s"
          }}
        />
        <Circle
          cx={cx}
          cy={cy}
          strokeColor={"rgba(0,210,211,0.5)"}
          strokeWidth={6}
          radius={radius - 20}
          style={{
            strokeDasharray: "24 14",
            strokeDashoffset: 14,
            transition:
              "stroke-dashoffset 2s ease 0s, stroke-dasharray 2s ease 0s, stroke 2s"
          }}
        />
        <Circle
          cx={cx}
          cy={cy}
          strokeColor={"rgba(80,219,251,0.75)"}
          strokeWidth={3}
          radius={radius - 30}
          style={{
            strokeDasharray: da2,
            strokeDashoffset: 4,
            transition:
              "stroke-dashoffset 2s ease 0s, stroke-dasharray 2s ease 0s, stroke 2s"
          }}
        />
      </svg>
    </StyledCore>
  );
};
