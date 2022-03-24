import styled from "styled-components";

export const NavSideContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  /* height: 100%; */
  background: var(--color-primary);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  height: ${({ isOpen }) => (isOpen ? "100%" : "0")};
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  color: #fff;

  /* display: ${({ isOpen }) => (isOpen ? "" : "none")}; */
`;

export const NavsideBody = styled.div`
  display: ${({ isOpen }) => (isOpen ? "" : "none")};
`;
