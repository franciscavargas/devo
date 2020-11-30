import { Fragment } from "react";
import styled from "styled-components/macro";
import { Container, Row } from "./shared/Grid";
import GlobalStyle from "./shared/GlobalStyles";
import AudioPlayerBar from "./AudioPlayerBar";
import img from "./img/music-app.png";

const StyledContainer = styled(Container)`
  background-image: url(${img});
  background-size: cover;
  background-position: center top;
  min-height: 100vh;
`;

const StyledRow = styled(Row)`
  flex-grow: 1;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <StyledContainer>
          <StyledRow></StyledRow>
          <AudioPlayerBar />
        </StyledContainer>
      </div>
    </Fragment>
  );
}

export default App;
