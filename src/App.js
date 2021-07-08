import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Core } from "./components/core";
import { Line } from "./components/line";
import { Button } from "./components/button";
import { Mouse } from "./components/mouse";
import { Graph } from "./components/graph";

import "./styles.css";
import { Title } from "./components/title";

export const MenuButton = styled.button`
  position: absolute;
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  right: ${({ position }) => position.right};
  bottom: ${({ position }) => position.bottom};
  color: #fff;
  font-size: 1.25rem;
  border: 1px solid ${(p) => p.border};
  border-radius: 3px;
  padding: 8px 40px;
  background: transparent;
  cursor: pointer;
  min-width: 160px;
`;

export default function App() {
  const containerRef = useRef(null);

  const [dimens, setDimens] = useState({ width: 0, height: 0 });
  const [path, setPath] = useState({ x: 0, y: 0 });
  const [hovered, setIsHovered] = useState(false);
  const [title, setTitle] = useState(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setDimens({
      w: containerRef.current.getBoundingClientRect().width,
      h: containerRef.current.getBoundingClientRect().height
    });
  }, [containerRef]);

  const handleHover = (ref, isHovered) => {
    setIsHovered(isHovered);

    if (isHovered) {
      setTitle(ref.innerText);
      const X =
        ref.getBoundingClientRect().x + ref.getBoundingClientRect().width / 2;
      const Y =
        ref.getBoundingClientRect().y + ref.getBoundingClientRect().height / 2;
      setPath({ x: X, y: Y });
    } else {
      setTitle(null);
    }
  };

  const handleMouseMove = (e) => {
    setMouseCoords({
      x: e.clientX,
      y: e.clientY
    });
  };

  const viewBox = [0, 0, dimens.width, dimens.height].join(" ");

  return (
    <>
      <div className="App" ref={containerRef} onMouseMove={handleMouseMove}>
        <Graph viewBox={viewBox} ht={mouseCoords.y} />
        {hovered && <Title title={title} />}
        <Mouse x={mouseCoords.x} y={mouseCoords.y} w={dimens.w} h={dimens.h} />
        <Line
          path={path}
          dimens={dimens}
          isHovered={hovered}
          viewBox={viewBox}
        />

        <Core dimens={dimens} isHovered={hovered} viewBox={viewBox} />
      </div>

      <Button
        border="#ee5253"
        position={{ top: "20%", left: "5%" }}
        label="ARMOUR"
        onHover={handleHover}
      />
      <Button
        border="#ff9f43"
        position={{ top: "20%", right: "5%" }}
        label="DRAGON"
        onHover={handleHover}
      />

      <Button
        border="#00d2d3"
        position={{ bottom: "20%", left: "5%" }}
        label="JADE"
        onHover={handleHover}
      />

      <Button
        border="#ff9ff3"
        position={{ right: "5%", bottom: "20%" }}
        label="JIGGLY"
        onHover={handleHover}
      />
    </>
  );
}
