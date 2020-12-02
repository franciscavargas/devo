import React, { Component } from "react";
import { Row, Col } from "../shared/Grid";
import styled from "styled-components/macro";
import IconButton from "./IconButton";
import Bar from "./Bar";
import {
  SpeakerLow,
  SpeakerHigh,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Play,
  Gear,
  Pause,
} from "phosphor-react";

class AudioPlayerBar extends Component {
  render() {
    const Container = styled(Row)`
      height: 96px;
      background-color: #ffffff;
      box-shadow: 0px -2px 20px rgba(149, 142, 187, 0.25);
    `;

    const CurrentSongDetails = styled(Col)`
      display: flex;
      flex-direction: row;
      align-items: center;
    `;

    const Cover = styled.div`
      display: flex;
      background-image: url(${(props) => props.songCover});
      background-size: cover;
      background-position: center center;
      width: 70px;
      height: 70px;
      margin-left: 25px;
      margin-right: 25px;
      border-radius: 8px;
      border: 1px solid #b2b4c2;
      flex-shrink: 0;
    `;

    const SongDetails = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      white-space: nowrap;

      .title {
        margin: 0;
        font-weight: 600;
        color: #252d52; // Black
        font-size: 16px;
        line-height: 24px;
      }

      .artist {
        margin: 0;
        color: #abb1c6; // Grey
        font-size: 14px;
        line-height: 21px;
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      }
    `;

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
        font-size: 13px;
        color: #abb1c6; //Grey
      }

      progress {
        margin: 0 10px;
      }
    `;

    const VolumeDevices = styled(Col)`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-right: 25px;
    `;

    return (
      <Container>
        <CurrentSongDetails size={1}>
          <Cover songCover={this.props.songCover} />
          <SongDetails>
            <p className="title">{this.props.songTitle}</p>
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
                icon={<Pause color="#ffffff" weight="fill" size={16} />}
                onClick={this.props.onPause}
              />
            ) : (
              <IconButton
                style="rect"
                icon={<Play color="#ffffff" weight="fill" size={16} />}
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
          <IconButton icon={<Gear />} onClick={this.props.onSettings} />
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
