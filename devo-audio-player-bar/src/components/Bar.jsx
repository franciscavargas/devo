import React, { Component } from "react";
import styled from "styled-components/macro";

const StyledBar = styled.progress`
  border: none;
  margin: 0 10px;
  height: 8px;
  width: ${(props) => props.inputWidth};

  &::-webkit-progress-bar {
    background: #f1f2fa;
    border-radius: 4px;
    height: 8px;
  }

  &::-webkit-progress-value {
    background: linear-gradient(180deg, #b5637d 0%, #d5929b 100%);
    border-radius: 4px;
    height: 8px;
  }
`;

class Bar extends Component {
  render() {
    return (
      <StyledBar
        value={this.props.value}
        max={100}
        inputWidth={this.props.inputWidth}
      />
    );
  }
}

export default Bar;
