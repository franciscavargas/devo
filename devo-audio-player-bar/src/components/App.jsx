import { Fragment } from "react";
import styled from "styled-components/macro";
import { Container, Row } from "../shared/Grid";
import GlobalStyle from "../shared/GlobalStyles";
import AudioPlayerBar from "./AudioPlayerBar";
import img from "../img/music-app.png";

const StyledContainer = styled(Container)`
  background-image: url(${img});
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
`;

const StyledRow = styled(Row)`
  flex-grow: 1;
`;

const state = {
  artistName: "Gorillaz",
  artistUrl: "/artist/gorillaz",
  songTitle: "Feel Good Inc.",
  songCover:
    "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG",
  isPlaying: false,
  songProgress: "1:16",
  songTime: "3:33",
  songProgressPercentage: 30,
  volume: 40,
  // onShuffle
  // onSkipBack
  // onPause
  // onPlay
  // onSkipForward
  // onRepeat
  // onSettings
  // onSpeakerLow
  // onSpeakerHigh
};

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <StyledContainer>
          <StyledRow></StyledRow>
          <AudioPlayerBar {...state} />
        </StyledContainer>
      </div>
    </Fragment>
  );
}

export default App;
