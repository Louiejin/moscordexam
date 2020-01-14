const app = require('express')();
const basicAuth = require('express-basic-auth');
app.use(basicAuth({
    users: { news: 'newsecrect' },
    challenge: true // <--- needed to actually show the login dialog!
}));
const port = process.env.PORT || 3001;
app.use((req,res,next)=>{
    const allowOrigin = ['http://localhost:5000', 'http://localhost:3000'];

    if(allowOrigin.indexOf(req.headers.origin)>-1){
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Content-Type,Authorization,Accept');
    next();
});

const newsRoutes = require('./routes/appRoutes');
app.use('/', newsRoutes);

app.listen(port, ()=>{console.log("server has start on localhost with port" + port)})
module.exports = app;