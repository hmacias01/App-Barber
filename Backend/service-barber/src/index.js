const express = require ('express');
// const morgan =require ('morgan');
const bodyParser = require("body-parser");
var cors = require('cors');

//initialiacion
var app = express();
app.use(bodyParser.json());
app.use(cors());


//setting
app.set('port', process.env.PORT || 3000);


//middelewares
//  app.use(morgan('dev'));
//  app.use(express.urlencoded({extended:false}));
//  app.use(express.json());

//global variables
// app.use((req,res,next)=>{
// next();
// })

//declarando routes
app.use(require('./routes'));
const authentificationRoutes = require("./routes/authentification");
const BaberiasRoutes = require("./routes/barberias");




// usando routes
app.use("/usuario",authentificationRoutes);
app.use("/barberias",BaberiasRoutes);

// app.use('/links',require('./routes/links'));

//public




//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})