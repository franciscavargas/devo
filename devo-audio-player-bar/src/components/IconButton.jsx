import React, { Component } from "react";
import styled from "styled-components/macro";
import { IconContext } from "phosphor-react";

const Container = styled.button`
  width: 36px;
  height: 36px;
  cursor: pointer;
  border: none;
  background: none;
  transition: all 0.5s ease;
  svg {
    fill: #b5637d;
  }
  :focus {
    outline: 0;
  }
  &.rect {
    background: linear-gradient(180deg, #b5637d 0%, #d5929b 100%);
    border-radius: 10px;
    width: 36px;
    height: 36px;
    margin: 0 5px;
    svg {
      vertical-align: sub;
      fill: #ffffff;
    }
    :hover {
      background: rgba(181, 99, 125, 0.2);
    }
  }
`;

class IconButton extends Component {
  render() {
    return (
      <IconContext.Provider
        value={{
          size: 20,
          weight: "bold",
          mirrored: false,
        }}
      >
        <Container className={this.props.style} onClick={this.props.onClick}>
          {this.props.icon}
        </Container>
      </IconContext.Provider>
    );
  }
}

export default IconButton;
