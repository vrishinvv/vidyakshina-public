import express from "express";
import { config } from "./common/configs.js";
import { addUser, checkUser, findUserByUsername, getAllUsers } from "./users-db.js"
import { db } from './common/db.js'
import cors from "cors";

const app = express();

//cors
app.use(cors({
    origin: ['https://typesafe-vidyakshina.vercel.app'],
    credentials: true,
    optionsSuccessStatus: 200
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
    res.send({
        id: user.id,
        message: "Successfully added!"
    });
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
        res.send({
            user_id: result.rows[0].id, 
            message: "Successfully signed in!"
        });
    }else{

        res.status(401);
        res.send({
            message: "Invalid credentials!",
        });

    }
})


// update user - PATCH

// delete user - DELETE

app.post("/results", async (req, res)=>{
    const { userId, wpm, accuracy } = req.body;

    console.log(userId, wpm, accuracy);

    // We save the typing session details by creating a new row in the results DB
    try {
        await db.query(
            'INSERT INTO results (user_id, wpm, accuracy) VALUES ($1, $2, $3)',
           [userId, wpm, accuracy]
        );

        // res.status(201) is a response from the server stating that a new typing session has been successfully created
        res.status(201).json({ success: true, message: 'Result saved' });
    } catch (error) {
        console.error('Save result error:', error.message);
        res.status(500).json({ error: 'Something went wrong' });
    }
})


export {
    app
}