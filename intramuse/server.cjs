// server.js
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const asyncHandler = require("express-async-handler")

// Create a Mongoose schema for the Post model
const postSchema = new mongoose.Schema({
    track: String,
    artist: String,
    albumCover: String,
    caption: String
});

// Create a Mongoose model for the Post schema
const Post = mongoose.model('Post', postSchema);

const app = express();
const PORT = process.env.PORT || 5173;

// Connect to MongoDB Atlas cluster
const uri = "mongodb+srv://intramuse:intramuse@postcluster.wlpvbp5.mongodb.net/<dbname>?retryWrites=true&w=majority&appName=postCluster";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch(err => {
    console.error('Error connecting to MongoDB Atlas:', err);
});

// Middleware
app.use(express.json());

// Routes
app.post("/posts", asyncHandler(async (req, res) => {
    try {
        // Extract image from URL
        //const imageUrl = req.body.albumCover;
        //const imageBuffer = await getImageFromUrl(imageUrl);

        // Save image locally -- why would you ever need to do this?
        //const imageName = `album_cover_${Date.now()}.jpg`;
        //const imagePath = path.join(__dirname, 'uploads', imageName);
        //await fs.writeFile(imagePath, imageBuffer);

        // Create a new Post document
        const post = new Post({
            track: req.body.track,
            artist: req.body.artist,
            albumCover: req.body.albumCover,
            caption: req.body.caption
        });

        // Save the post to the database
        await post.save();

        res.status(201).json({ message: 'Post created successfully' });
    } catch (err) {
        console.error('Error creating post', err);
        res.status(500).json({ error: 'Failed to create post' });
    }
}));

// Function to fetch image from URL
async function getImageFromUrl(url) {
    const response = await axios.get(url, {
        responseType: 'arraybuffer'
    });
    return sharp(response.data).toBuffer();
}

app.get('/exploring', async (req, res) => {
    try {
        // Fetch all posts from the database
        const posts = await Post.find();
        
        // Send the posts as JSON response
        res.status(200).json(posts);
    } catch (err) {
        console.error('Error fetching posts', err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


