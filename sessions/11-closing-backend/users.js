import _ from 'lodash'
 
// datastructure = Array<user objects>
const usersList = [];
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
    usersList.push({
        username: username,
        password: password
    });
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

export {
    findUserByUsername,
    addUser,
    updateUserPassword,
    deleteUser,
    getAllUsers
}