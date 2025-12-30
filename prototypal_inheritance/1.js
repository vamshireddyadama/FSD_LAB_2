/*Create a constructor function named User that accepts name and email as parameters, stores
them as object properties and has a login() method added using User.prototype.*/

//User constructor func
function User(name,email) {
    this.name = name;
    this.email = email;
}
//login method adding using prototype
User.prototype.Login = function () {
    console.log("Name :"+this.name +" , "+"Email : "+this.email);
    
}

/*Create a constructor function named Student that calls the User constructor to reuse name and
email, adds a new property rollNo, inherits the login() method using the prototype chain and
adds a new method registerEvent() using Student.prototype.*/

