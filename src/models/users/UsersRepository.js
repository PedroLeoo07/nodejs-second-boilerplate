import User from "./User.js"

class UsersRepository{
    constructor() {
        this.users = []
    }

    getAllUsers() {
        return this.users
    }
    
    addUser(name, email, password) {
        const newUser = new User(name, email, password)

        this.users.push(newUser)

        return newUser
    }

    getUserById(id){
        const user = this.user.find(u => u.id == id)

        if (!user){
            return null
        }
    }
}

export default UsersRepository