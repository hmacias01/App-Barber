const express = require ('express');
const morgan =require ('morgan');
const bodyParser = require("body-parser");
var cors = require('cors');
//const exphbs = require('express-handlebars');
//const path = require('paht');


//initialiacion
const app = express();
app.use(bodyParser.json());
app.use(cors());


//setting
app.set('port', process.env.PORT || 3000);
// app.set('views',path.join(_dirname, 'views'));
// app.engine('.hbs',exphbs({
//     defaultLayout: 'main',
//     layoutsDir:path.join(app.get('views'),'layouts'),
//     partialsDir: path.join(app.get('view'),'partials'),
//     extname:'.hbs'    
// }))

//middelewares
 app.use(morgan('dev'));
 app.use(express.urlencoded({extended:false}));
 app.use(express.json());

//global variables
app.use((req,res,next)=>{
next();
})

//routers
app.use(require('./routes'));
app.use(require('./routes/authentification'));
app.use('/links',require('./routes/links'));

//public




//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})