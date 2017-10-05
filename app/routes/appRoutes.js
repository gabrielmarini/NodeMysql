module.exports = function(router){
    router.get('/loja',function(req,res){
        var conexao = router.config.connection();
        var LojaDAO = new router.infra.LojaDAO(conexao);
        LojaDAO.lista(function(err,result){
            res.format({
                html: function(){
                    res.render('loja/index',{lista:result});
                },
                json: function(){
                    res.json(result);
                }
            });
        });
        conexao.end();
    });

    router.get('/produtos/cadastrar', function(que, res){
        res.render('loja/formCad');
    });
    router.post('/produtos/cadastrar', function(req,res){
        var produto = req.body;

        req.assert('name', 'name is required').notEmpty();
        req.assert('price', 'price is required').notEmpty();

        if(req.validationErrors()){
            res.status(400).json(req.validationErrors());
            return;
        }

        var conexao = router.config.connection();
        var LojaDAO = new router.infra.LojaDAO(conexao);
        LojaDAO.salva(produto, function(error, resultados){
            res.redirect('/loja');
        });
    });

    router.post('/user', function(request, response){

        request.assert('nameUser','nameUser is required').notEmpty();
        request.assert('emailUser','emailUser is required').notEmpty();
        request.assert('manegerLevelUser','manegerLevelUser is required').notEmpty();
        request.assert('statusUser','statusUser is required').notEmpty();
        request.assert('CreateAtUser','CreateAtUser is required').notEmpty();
        request.assert('UpdateAtUser','UpdateAtUser is required').notEmpty();

        if(request.validationErrors()){
            response.status(400).json(request.validationErrors());
            return;
        }

        var conexao = router.config.connection();
        var UsersDAO = new router.infra.UsersDAO(conexao);
        UsersDAO.create(request.body, function(error,user){
            console.log('Resposa: ',user);
            console.log('Error: ',error);
            response.json(user);
        });
    });
}
