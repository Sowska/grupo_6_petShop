function recordameMiddleware (req, res, next) {
    next();

    if (req.cookies.recordame != undefined && req.session.usuarioLogueado == undefined){
        let usersJSON = fs.readFileSync ('users.json', { encoding: 'utf-8' });
        let users; 
       
        if (usersJSON == "") {
            users =[];
        } else{
            users = JSON.parse(usersJSON);
        }
        let usuarioALoguearse

        for( let i = 0; i < users.length; i++) {
            if (users[i].email == req.cookies.recordame) {
                usuarioALoguearse = users[i];
                break;
                }
            }

            req.session.usuarioLogueado = usuarioALoguearse;
        }
    }


module.exports = recordameMiddleware;