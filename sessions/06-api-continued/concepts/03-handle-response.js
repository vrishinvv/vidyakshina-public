/* --------------------------------------------------
   03_handle_response.js  – Working with JSON arrays
-------------------------------------------------- */

// const fetch = require('node-fetch');
import fetch from 'node-fetch';


async function main() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json(); // ← posts is now a JS array

        // Print the titles of the first 5 posts
        for(const post of posts.slice(0, 5)) {
            console.log(`Post #${post.id} title: ${post.title}`);
        }
    } catch (err) {
        console.error('Fetch failed:', err);
    }
}

main();