class Track {
    constructor(name, spotifyLink, artist, imageUrl) {
        this.name = name;
        this.spotifyLink = spotifyLink;
        this.artist = artist;
        this.imageUrl = imageUrl;
    }

    // Getter methods
    getName() {
        return this.name;
    }

    getSpotifyLink() {
        return this.spotifyLink;
    }

    getArtist() {
        return this.artist;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    // Setter methods
    setName(name) {
        this.name = name;
    }

    setSpotifyLink(spotifyLink) {
        this.spotifyLink = spotifyLink;
    }

    setArtist(artist) {
        this.artist = artist;
    }

    setImageUrl(imageUrl) {
        this.imageUrl = imageUrl;
    }

    // Example method
    displayInfo() {
        console.log(`Track: ${this.name}`);
        console.log(`Artist: ${this.artist}`);
        console.log(`Spotify Link: ${this.spotifyLink}`);
        console.log(`Image URL: ${this.imageUrl}`);
    }
}

// Example usage
const track = new Track(
    "Track Name",
    "https://open.spotify.com/track/spotify_track_id",
    "Artist Name",
    "https://example.com/image.jpg"
);

// Display track information
track.displayInfo();
