import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

const CLIENT_ID = "5283912f91284542851ecc680c205c6b";
const CLIENT_SECRET = "e74bf7f445eb4c3fb1f25a81a54fbf2d";

const Post = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [caption, setCaption] = useState("");

  useEffect(() => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET
    };
    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  async function search() {
    console.log("Search for " + searchInput);
    var trackParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken
      }
    };

    var tracks = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=track",
      trackParameters
    )
      .then((response) => response.json())
      .then((data) => {
        const track = [];
        for (let i = 0; i < 5; i++) {
          track.push([
            data.tracks.items[i].album.images[0]["url"],
            data.tracks.items[i].name,
            data.tracks.items[i].artists[0].name
          ]);
        }
        setSearchedTracks(track);
      });
  }



  async function handlePostSong() {
    if (!selectedTrack) {
      console.log("Choose a song first!");
      return;
    }

    try {
      await axios.post("/posts", {
        track: selectedTrack[1],
        artist: selectedTrack[2],
        albumCover: selectedTrack[0],
        caption: caption
      });
      console.log("Song posted successfully!");
    } catch (error) {
      console.error("Error posting song:", error);
    }
  }

  return (
    <div>
      <div className="New_Post">
        <div>
          <input
            placeholder="search for songs here"
            className="searchbar"
            onKeyUp={(event) => {
              setSearchInput(event.target.value);
            }}
          ></input>
          <button
            onClick={(event) => {
              search();
            }}
          >
            search for song
          </button>
          <h1>
            {searchedTracks.map((tracking, i) => {
              return (
                <div
                  className="searchresults"
                  key={i}
                  onClick={(event) => {
                    setSelectedTrack(tracking);
                    console.log(selectedTrack);
                  }}
                >
                  <img src={tracking[0]} height={"25px"} alt={tracking[1]} />
                  <h5>
                    {tracking[1]}, {tracking[2]}
                  </h5>
                </div>
              );
            })}
          </h1>
        </div>
        <input
          className="input"
          placeholder="enter a caption!"
          onKeyUp={(event) => {
            setCaption(event.target.value);
          }}
        ></input>
        <button onClick={handlePostSong}>post song!</button>
      </div>
    </div>
  );
};

export default Post;
