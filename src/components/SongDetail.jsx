import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    return this.props.selectedSong ? (
      <div className="songlist">
        <h3>Selected Song</h3>
        <h4>Title: {this.props.selectedSong.title}</h4>
        <h4>Duration: {this.props.selectedSong.duration}</h4>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
