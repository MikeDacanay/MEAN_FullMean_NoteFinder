// Express
let express = require('express');
let app = express();
const path = require("path");

//Static Folder
app.use(express.static(__dirname + '/public/dist'));

// Body Parser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Mongo Database
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/triviaSchema');
let triviaSchema = new mongoose.Schema({
	question: {type: String},
	correct: {type: String},
	fake1: {type: String},
	fake2: {type: String},
	user: {type: String},
	result: {type: String},
	attempt: {type: String}
})
mongoose.model("Trivia", triviaSchema); //defining
let Trivia = mongoose.model('Trivia');

// Routes

app.post('/contestant', (req,res) =>{
	// console.log(req.body);
	Trivia.create(req.body, (err,trivia)=>{
		if(err)return res.json(err)
		else return res.json(trivia)
	})
})

app.post('/new_question', (req,res) =>{
	// console.log(req.body);
	Trivia.create(req.body, (err,trivia)=>{
		if(err)return res.json(err)
		else return res.json(trivia)
	})
})


app.get('/trivias', (req, res)=>{
	Trivia.find({}, function(err, trivias){
		return res.json(trivias);
	})
})
	
app.all("*", (req, res, next) =>{
	res.sendfile(path.resolve("./public/dist/index.html"))
})


// Server listening @ 1337
app.listen(1337, ()=> console.log('Server running at 1337'));