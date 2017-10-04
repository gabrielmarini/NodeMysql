function LibrariesDAO(connection){
    this.connection = connection;
}

LibrariesDAO.prototype.lista = function(callback){ 
    this.connection.query('select * from livros',callback);
}

LibrariesDAO.prototype.salva = function(produto,callback){ 
    this.connection.query('insert into livros set ?',produto,callback);
}
module.exports = function(){
    return LibrariesDAO;
}