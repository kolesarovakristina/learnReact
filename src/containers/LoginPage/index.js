// @flow
import React from "react";
import { Link } from "react-router-dom";
import { StyledH1, StyledWrapper } from "./styles";

const LoginPage = () => (
  <StyledWrapper>
    <StyledH1>Login page</StyledH1>
    <Link to="/dashboard/charts">Log in to dashboard</Link>
  </StyledWrapper>
);

export default LoginPage;
