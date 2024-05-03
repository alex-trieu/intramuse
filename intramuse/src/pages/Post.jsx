import React from "react";
import "./styles.css"
import {useState, useEffect} from 'react'

const CLIENT_ID = "5283912f91284542851ecc680c205c6b";
const CLIENT_SECRET = "e74bf7f445eb4c3fb1f25a81a54fbf2d";


const Post = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");

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
                    track.push([data.tracks.items[i].album.images[0], data.tracks.items[i].name, data.tracks.items[i].artists[0].name])
                }
                console.log(track)
                return track
            })
    }

    return (
        <div className="New_Post">
            <input placeholder="search for songs here" class="searchbar" onKeyUp={event => {

                if (searchInput != '') {
                    search()
                }
                setSearchInput(event.target.value)
                }
            }
            onChange={event => {
                setSearchInput(event.target.value)
                console.log(searchInput)
                if (searchInput != '') {
                    search()
                }
                }
            }
            >
            </input>
            <input className="input" placeholder="enter a caption!" ></input>

            <button> yo </button>
        </div>
    );
};

export default Post;