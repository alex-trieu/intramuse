// models/post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    track: String,
    name: String,
    artist: String,
    albumCover: String,
    caption: String
});

module.exports = mongoose.model('Post', postSchema);
