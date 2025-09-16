import express from "express";
import { config } from "./common/configs.js";
import { addUser, findUserByUsername, getAllUsers } from "./users.js"

const app = express();

app.use(express.json());

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});


// create user - POST
app.post("/users", (req, res)=> {
    const {username, password} = req.body;
    addUser(username, password);
    res.send("Successfully added!");
})

// get particular user - GET
app.get("/users/:username", (req, res)=>{
    const {username} = req.params;
    const user = findUserByUsername(username)
    if(!user){
        res.send("User not found")
    }else{
        res.send(user)
    }
})


// get all users - GET
app.get("/users", (req, res)=>{
    const users = getAllUsers()
    res.send(users)
})

// update user - PATCH

// delete user - DELETE



export {
    app
}