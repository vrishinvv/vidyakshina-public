import express from "express";
import { config } from "./common/configs.js";
import { addUser, checkUser, findUserByUsername, getAllUsers } from "./users-db.js"

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

// sign-in
app.post("/users/sign-in", async (req, res)=> {
    const {username, password} = req.body;
    const result = await checkUser(username, password);
    console.log(result.rows)
    if(result.rows.length !== 0){
        res.send("Yes signed in!");
    }else{
        res.send("no user-password combination found!");
    }
})


// update user - PATCH

// delete user - DELETE



export {
    app
}