import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  showSongs = () => {
    return this.props.songs.map((eachSong) => {
      return (
        <div className="cont" key={eachSong.title}>
          <h1 className="title">{eachSong.title}</h1>
          <button onClick={()=>this.props.selectSong(eachSong)} className="btn">Select</button>
        </div>
      );
    });
  };
  render() {
    // console.log(this.props);
    return <div className="songlist">{this.showSongs()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
