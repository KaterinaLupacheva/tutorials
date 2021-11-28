import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: #d8dcd6;
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 0.5s;
  overflow: hidden;
`;
