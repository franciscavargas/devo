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
  fill: #abb1c6; // Grey
  svg {
    vertical-align: middle;
    line,
    polyline,
    path,
    circle {
      stroke: #abb1c6; // Grey
    }

    :hover {
      line,
      polyline,
      path,
      circle {
        stroke: #b5637d; //Pink
      }
    }
  }
  :focus {
    outline: 0;
  }
  &.rect {
    background: linear-gradient(180deg, #d88d8e 0%, #c9757e 65%, #b5607a 100%);
    border: 1px solid #e6c5cc;
    border-radius: 6px;
    width: 36px;
    height: 36px;
    margin: 0 5px;
    svg {
      fill: #ffffff; // white
      vertical-align: sub;
    }
    :hover {
      background: #d88d8e;
      svg {
        fill: #b5637d;
      }
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
