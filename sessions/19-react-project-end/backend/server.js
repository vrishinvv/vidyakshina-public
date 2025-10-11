import express from "express";
import { config } from "./common/configs.js";
import { addUser, checkUser, findUserByUsername, getAllUsers } from "./users-db.js"
import cors from "cors";

const app = express();

//cors
app.use(cors({
    origin: '*'
}))

app.use(express.json());

app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}`);
});


// create user - POST
app.post("/register", async (req, res)=> {
    const {username, password} = req.body;
    const user = await findUserByUsername(username)
    if(user){
        res.status(400);
        res.send("User already exists!")
        return
    }
    addUser(username, password);
    res.send("Successfully added!");
})

// get particular user - GET
app.get("/users/:username", (req, res)=>{
    const {username} = req.params;
    const user = findUserByUsername(username)
    if(!user){
        res.send("User not found")
        return
    }
    res.send(user)
})


// get all users - GET
app.get("/users", (req, res)=>{
    const users = getAllUsers()
    res.send(users)
})

// sign-in
app.post("/login", async (req, res)=> {
    const {username, password} = req.body;
    const result = await checkUser(username, password);
    console.log(result.rows)
    if(result.rows.length !== 0){
        res.status(200);
        res.send("Yes signed in!");
    }else{
        res.status(401);
        res.send("no user-password combination found!");
    }
})


// update user - PATCH

// delete user - DELETE



export {
    app
}