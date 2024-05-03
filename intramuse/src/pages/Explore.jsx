import React from "react";
const Explore = () => {
    async function fetchJson(path, options = {}) {
        const response = await fetch(path, options);
        console.log(response)
        const data = await response.json();
        return data;
    }

    const retrievePosts = () => fetchJson("/exploring")
    console.log(retrievePosts())
    return (
        <form 
            className="Rectangle"
        >
            <h1>Posts pop up here</h1>
        </form>
    );
};

export default Explore;