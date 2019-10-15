const express = require('express');
const connectDB =require('./config/db');

const app = express();

connectDB();


//Init Middleware
app.use(express.json({extended:false}));

app.get('/',(req, res)=>
res.json({msg:"Welcome to the API"}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type',"x-auth-token");
    next();
}
    app.use(allowCrossDomain);
  


//define routes
app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/contacts', require('./Routes/contacts'));


const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`server started ${PORT}`));