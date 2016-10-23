//Importing necessary node module!
var express=require('express');
var app=express();
var mongoose = require('mongoose')
var morgan=require('morgan');
var bodyParser=require('body-parser');
var methodOverride=require('method-override');
//Importing custom environment(development || production) configuration module
var config=require('./config/config.js');

//Connecting to mongoDB
mongoose.connect(config.dbURL);

//Setting up static file directory to be used by Express.
app.use(express.static(__dirname+'/public'));
//Setting up morgan logger to log all the request to console.
app.use(morgan('dev'));

//Setting up parser
app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.use(methodOverride());

//Creating a mongoose model for tasks
var tasks=mongoose.model('tasks',new mongoose.Schema({
	text:String
}));
//Importing custom routes model.
require('./routes/routes.js')(app, express,tasks);


//Use port by reading to environment variable(this will be helpful during producrion) 
app.listen(process.env.PORT || 3000);
