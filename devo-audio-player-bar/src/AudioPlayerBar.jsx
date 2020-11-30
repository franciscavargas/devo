import React, { Component } from "react";
import { Row, Col } from "./shared/Grid";
import styled from "styled-components/macro";

class AudioPlayerBar extends Component {
  render() {
    const Container = styled(Row)`
      height: 96px;
    `;
    const CurrentSongDetails = styled(Col)`
      background-color: red;
    `;
    const Controls = styled(Col)`
      background-color: blue;
    `;
    const VolumeDevices = styled(Col)`
      background-color: green;
    `;

    return (
      <Container>
        <CurrentSongDetails size={1}>Hola</CurrentSongDetails>
        <Controls size={2}>Hola 2</Controls>
        <VolumeDevices size={1}>Hola 3</VolumeDevices>
      </Container>
    );
  }
}

export default AudioPlayerBar;
