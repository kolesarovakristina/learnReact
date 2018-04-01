import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-weight: bold;
  color: grey;
`;
const setter = () => "background:red";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${props => props.mojState && setter()};
`;
