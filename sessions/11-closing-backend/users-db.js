import _ from 'lodash'
import {db, execQuery} from './common/db.js'

/*
{
    username: "abc",
    password: "123"
}
*/

function findUserByUsername(username){
    for(const i = 0; i < _.size(usersList); i++){
        const user = usersList[i];
        if(user.username === username){
            return user
        }
    }
    return null
}


function addUser(username, password){
    // execQuery, db
    const insertQuery = `INSERT INTO users (username, password)
                         VALUES ($1, $2)`;
    const params = [username, password];
    execQuery(insertQuery, params)
}

function updateUserPassword(username, newPassword){
    for(const i = 0; i < _.size(usersList); i++){
        const user = usersList[i];
        if(user.username === username){
            user.password = newPassword
            usersList[i] = user
        }
    }
}

function deleteUser(username){
    const newUsersList = []
    for(const i = 0; i < _.size(usersList); i++){
        const user = usersList[i]
        if(user.username !== username){
            newUsersList.push(user)
        }
    } 
    usersList = newUsersList
    return
}

function getAllUsers(){
    return usersList
}   

async function checkUser(username, password){
    const checkSql = ` SELECT * from users 
                        WHERE username = $1 
                        AND password = $2
    `

    const params = [username, password]
    return await execQuery(checkSql, params);
}


export {
    checkUser,
    findUserByUsername,
    addUser,
    updateUserPassword,
    deleteUser,
    getAllUsers
}