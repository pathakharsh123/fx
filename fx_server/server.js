// Global packages for server

const ExpressServer = require('express');
const fs = require('fs');
const https = require('https');

// user defined modules
//const privateKey  = fs.readFileSync("key.pem");
//const certificate  = fs.readFileSync("cert.pem");



// Reading from config file

const var_config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

PORT = var_config.DEVELOPMENT.PORT;
console.log(var_config);
console.log(PORT);

var expressServer = ExpressServer();


//  Middleware configuration

expressServer.use(ExpressServer.json());

expressServer.use((req,res, next)=>{
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent') );
    next();
})

var auth = (req,res,next)=>{
    console.log(req.body);

    if (req.body.authenticated==='1') {
        next();
    }else{
        res.status(401).json({user: 'Unauthenticated'});
    }
};



// API - Endpoint - Route to server
expressServer.get('/useraccount/:accountid', auth, (req, res) => {
    const accountid = +req.params.accountid;
    if (accountid === 1){
        res.json({type : 'user information'});
    }else {
        res.json({type : 'failed to get user information'});
    }
    
});


expressServer.post('/registerUser', (req, res) => {
    console.log(req.body);

    if (req.body.password === req.body.confirm_password){
        res.json({type : 'register post'});
    }else {
        res.json({type : 'fail register post'});
    };
    
});

expressServer.post('/login', (req, res) => {
    res.json({type : 'login post'});
});

expressServer.put('/', (req, res) => {
    res.json({type : 'put'});
});

expressServer.delete('/delete_user', (req, res) => {
    res.json({type : 'delete user'});
});

expressServer.patch('/', (req, res) => {
    res.json({type : 'patch'});
});
expressServer.listen(PORT, () => {
    console.log("Express Server listening on port " + PORT);
    
});

