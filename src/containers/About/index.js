import React from "react";
import { StyledH1, StyledWrapper } from "./styles";

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      message: "message",
    };
    this.changeState = this.changeState.bind(this);
    this.changeState1 = this.changeState1.bind(this);
  }
  changeState() {
    this.setState({ message: "iny" });
  }
  changeState1() {
    this.setState({ message: "asdasdasdasdasd" });
  }
  render() {
    if (this.state.isShow === true) {
      return (
        <div>
          <div onClick={this.changeState}>zmena stavu c1:</div>
          <div onClick={this.changeState1}>zmena stavu c2:</div>
          <span>{this.state.message}</span>
        </div>
      );
    }
    return (
      <StyledWrapper mojState={this.state.isShow}>
        <StyledH1>About page</StyledH1>
      </StyledWrapper>
    );
  }
}

export default AboutPage;
