export default class user {
    constructor(email, name) {
        this._id = email; 
        this._id = name; 
    }
    greeting() {
        return `hi, my name is $(this._name).`;
    } 
}

