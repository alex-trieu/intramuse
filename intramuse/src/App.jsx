import React from "react";
import "./App.css";
import Navbar from "./components/index";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Post from "./pages/Post";
import Explore from "./pages/Explore";

function App() {
    return (
        <div>
            <Router>
            <Navbar/>
            <Routes>
                <Route path="/Post" element={<Post />} />
                <Route path="/Explore" element={<Explore />}/>
            </Routes>
        </Router>
        </div>
        
    );
}

export default App;