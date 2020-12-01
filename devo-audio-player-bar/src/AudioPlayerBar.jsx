import React, { Component } from "react";
import { Row, Col } from "./shared/Grid";
import styled from "styled-components/macro";
import IconButton from "./components/IconButton";
import Bar from "./components/Bar";
import img from "./img/gorillaz.png";
import {
  SpeakerLow,
  SpeakerHigh,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Play,
  Monitor,
  Pause,
} from "phosphor-react";

class AudioPlayerBar extends Component {
  render() {
    const Container = styled(Row)`
      height: 96px;
      background-color: #ffffff;
      /* Fix drop shadow color */
      filter: drop-shadow(0px 4px 36px #e2e3ec);
      /* position: absolute;
      bottom: 0; */
    `;

    const CurrentSongDetails = styled(Col)`
      display: flex;
      flex-direction: row;
      align-items: center;
    `;

    const Cover = styled.div`
      display: flex;
      background-image: url(${img});
      background-size: cover;
      background-position: center center;
      width: 70px;
      height: 70px;
      margin-left: 25px;
      margin-right: 25px;
      border-radius: 8px;
      border: 1px solid #b2b4c2;
    `;

    const SongDetails = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;

      .title {
        margin: 0;
        font-weight: 500;
        color: #252d52;
        font-size: 16px;
        line-height: 24px;
      }

      .artist {
        margin: 0;
        color: #a9abba;
        font-size: 14px;
        line-height: 21px;
        font-weight: 500;
      }
    `;

    // Second Column
    const Player = styled(Col)`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `;

    const PlayerButtons = styled.div`
      display: flex;
      justify-content: center;
      align-items: baseline;
      margin-bottom: 12px;
    `;

    const ProgressBar = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      label {
        font-size: 14px;
        color: #a9abba;
      }
    `;

    const SongProgress = styled(Bar)`
      width: 360px;
    `;

    // https://blog.campvanilla.com/building-a-progress-bar-component-using-reactjs-styled-components-516dc2c3075a

    // Third Column
    const VolumeDevices = styled(Col)`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding-right: 25px;
    `;

    const VolumeBar = styled(Bar)`
      width: 180px;
    `;

    return (
      <Container>
        <CurrentSongDetails size={1}>
          <Cover />
          <SongDetails>
            <p className="title">Feel Good Inc.</p>
            <a href={this.props.artistUrl} className="artist">
              {this.props.artistName}
            </a>
          </SongDetails>
        </CurrentSongDetails>
        <Player size={2}>
          <PlayerButtons>
            <IconButton icon={<Shuffle />} onClick={this.props.onShuffle} />
            <IconButton icon={<SkipBack />} onClick={this.props.onSkipBack} />
            {this.props.isPlaying ? (
              <IconButton
                style="rect"
                icon={<Pause color="#ffffff" weight="fill" size={18} />}
                onClick={this.props.onPause}
              />
            ) : (
              <IconButton
                style="rect"
                icon={<Play color="#ffffff" weight="fill" size={18} />}
                onClick={this.props.onPlay}
              />
            )}
            <IconButton
              icon={<SkipForward />}
              onClick={this.props.onSkipForward}
            />
            <IconButton icon={<Repeat />} onClick={this.props.onRepeat} />
          </PlayerButtons>
          <ProgressBar>
            <label>{this.props.songProgress}</label>
            <Bar
              value={this.props.songProgressPercentage}
              inputWidth={"360px"}
            />
            <label>{this.props.songTime}</label>
          </ProgressBar>
        </Player>

        <VolumeDevices size={1}>
          <IconButton icon={<Monitor />} onClick={this.props.onMonitor} />
          <ProgressBar>
            <IconButton
              icon={<SpeakerLow />}
              onClick={this.props.onSpeakerLow}
            />
            <Bar value={this.props.volume} inputWidth={"180px"} />
            <IconButton
              icon={<SpeakerHigh />}
              onClick={this.props.onSpeakerHigh}
            />
          </ProgressBar>
        </VolumeDevices>
      </Container>
    );
  }
}

export default AudioPlayerBar;
