import React from "react";
import "./styles.css"
import {useState, useEffect} from 'react'

const CLIENT_ID = "5283912f91284542851ecc680c205c6b";
const CLIENT_SECRET = "e74bf7f445eb4c3fb1f25a81a54fbf2d";


const Post = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [searchedTracks, setSearchedTracks] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState([]);
    const [caption, setCaption] = useState("");

    useEffect(() => {
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])

    async function search() {
        console.log("Search for " + searchInput)
        var trackParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }

        var tracks = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track', trackParameters)
            .then(response => response.json())
            .then(data => {
                const track = [];
                for (let i = 0; i < 5; i++) {
                    track.push([data.tracks.items[i].album.images[0]['url'], data.tracks.items[i].name, data.tracks.items[i].artists[0].name])
                }
                setSearchedTracks(track)
            })
    }
    console.log(searchedTracks)
    return (
        <div>
            <div className="New_Post">
                <div>
                    <input placeholder="search for songs here" class="searchbar" onKeyUp={event => {
                    setSearchInput(event.target.value)
                        }
                    }
                >
                </input>
                <button onClick={event => {
                    search()
            }}> search for song </button>
            <h1>
                {searchedTracks.map((tracking, i) => {
                    return (
                        <div className = 'searchresults' onClick={event => {
                            setSelectedTrack(tracking)
                            console.log(selectedTrack)
                        }}>
                            <img src={tracking[0]} height={'25px'}></img>
                            <h5>{tracking[1]}, {tracking[2]}</h5>
                        </div>
                    )
                })}
            </h1>
            </div>
            <input className="input" placeholder="enter a caption!" onKeyUp={event => {
                    setCaption(event.target.value)
                        }
                    }>

                </input>
            <button onClick={event => {
                if (selectedTrack != []){
                    console.log(caption)
                } else {
                    console.log('choose a song first!')
                }
            }}> post song! </button>
            
            </div>
            
        </div>
    );
};

export default Post;