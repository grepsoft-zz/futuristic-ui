import { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { getRandomInt } from "../utils/utils";

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

export const Line = ({ path, isHovered, viewBox, dimens }) => {
  const [da, setDa] = useState(`300 10`);

  const w = dimens.w;
  const h = dimens.h;

  let d = `M ${path.x},${path.y} L ${w / 2 + 100} ${h / 2} h -5`;
  if (path.x < w / 2) {
    d = `M ${path.x},${path.y} L ${w / 2 - 100} ${h / 2} h 5`;
  }

  useEffect(() => {
    setTimeout(() => {
      setDa(`${getRandomInt(50, 100)} 0`);
      setTimeout(() => {
        setDa(`50 ${getRandomInt(4, 20)} ${getRandomInt(20, 30)}`);
      }, 500);
    }, 20);
  }, [isHovered]);

  return (
    <>
      {/* <svg viewBox={viewBox} width={w} height={h}>
          <path
            id="lineAB"
            d="M 123 187 l 0 0 l 80 220 h 150"
            stroke="rgba(80,219,251,0.8)"
            strokeWidth="3"
            fill="none"
            style={{
              strokeDasharray: "300 10",
              transition:
                "stroke-dashoffset 2.5s ease 0s, stroke-dasharray 1s ease 0s, stroke 2s"
            }}
          />
        </svg> */}
      {isHovered ? (
        <svg viewBox={viewBox} width={w} height={h}>
          <path
            id="line"
            d={d}
            stroke="rgba(80,219,251,0.8)"
            strokeWidth="2"
            fill="none"
            strokeDasharray={da}
            style={{
              transition:
                "stroke-dashoffset 2s ease 0s, stroke-dasharray 1s ease 0s, stroke 2s"
            }}
          />
        </svg>
      ) : null}
    </>
  );
};

{
  /* <line
x1="0"
x2={w / 2 - 350}
y1={h / 2 - 150}
y2={h / 2 - 150}
stroke="rgba(80,219,251,0.8)"
stroke-width="2"
stroke-linecap="round"
style={{
  strokeDasharray: "23 3 17",
  transition:
    "stroke-dashoffset 2.5s ease 0s, stroke-dasharray 1s ease 0s, stroke 2s"
}}
/>  */
}
