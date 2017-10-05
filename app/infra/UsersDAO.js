function UsersDAO(connection){
    this.connection = connection;
}

UsersDAO.prototype.create = function(user,callback){
    this.connection.query("INSERT INTO users SET ?",user,callback);
}

// UsersDAO.prototype.update = function(user,callback){

// }

// UsersDAO.prototype.delete = function(user,callback){

// }

// UsersDAO.prototype.findAll = function(callback){

// }

module.exports = function(){
    return UsersDAO;
}