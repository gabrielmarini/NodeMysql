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

UsersDAO.prototype.findAll = function(callback){
    this.connection.select().from('users');
}

UsersDAO.prototype.findByQuery = function(query,callback){
    this.connection.query("SELECT * FROM users WHERE ?",query,callback);
}

module.exports = function(){
    return UsersDAO;
}