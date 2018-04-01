import React from "react";
import { withRouter } from "react-router";

import {
  StyledHeaderWrapper,
  StyledMenuWrapper,
  StyledNavLink
} from "./styles";

class Header extends React.Component {
  render() {
    const activeStyle = { color: "#253993" };

    return (
      <StyledHeaderWrapper>
        <StyledMenuWrapper>
          <StyledNavLink exact to="/dashboard/charts" activeStyle={activeStyle}>
            Charts
          </StyledNavLink>
          <StyledNavLink to="/dashboard/about" activeStyle={activeStyle}>
            About
          </StyledNavLink>
        </StyledMenuWrapper>
      </StyledHeaderWrapper>
    );
  }
}

export default withRouter(Header);
