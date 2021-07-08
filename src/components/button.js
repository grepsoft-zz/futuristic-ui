import { useRef } from "react";
import styled from "styled-components";

const MenuButton = styled.button`
  position: absolute;
  background-image: linear-gradient(
    to right,
    #1a2980 0%,
    #26d0ce 51%,
    #1a2980 100%
  );
  top: ${({ position }) => position.top};
  left: ${({ position }) => position.left};
  right: ${({ position }) => position.right};
  bottom: ${({ position }) => position.bottom};
  color: ${(p) => `${p.border}`};
  font-size: 1.25rem;
  border: 1px solid ${(p) => p.border};
  cursor: pointer;
  min-width: 160px;
  padding: 15px 45px;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: ${(p) => `0 0 20px ${p.border}`};
  border-radius: 10px;
  display: block;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const Button = ({ label, border, position, onHover }) => {
  const buttonRef = useRef(null);

  return (
    <MenuButton
      onMouseEnter={() => onHover(buttonRef.current, true)}
      onMouseLeave={() => onHover(buttonRef, false)}
      ref={buttonRef}
      border={border}
      position={position}
    >
      {label}
    </MenuButton>
  );
};

/*
.btn-grad {background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%)}
.btn-grad {
   margin: 10px;
   padding: 15px 45px;
   text-align: center;
   text-transform: uppercase;
   transition: 0.5s;
   background-size: 200% auto;
   color: white;            
   box-shadow: 0 0 20px #eee;
   border-radius: 10px;
   display: block;
 }

 .btn-grad:hover {
   background-position: right center; 
   color: #fff;
   text-decoration: none;
 }
*/
