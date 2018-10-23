

const express = require('express');
const exbhbs = require('express-handlebars')
const mongoose = require('mongoose');

// in case of deprecation warning, use code below to map global promise
// mongoose.Promise = global.Promise

mongoose.connect("mongodb://localhost/vidjot-dev", {
	useNewUrlParser: true
})
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

require('./models/Idea');

const Idea = mongoose.model('ideas')

const app = express();

const port = 5000;

app.engine('handlebars', exbhbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
	res.render('index')
})

app.get('/about', (req, res) => {

	res.render('about')
})



app.listen(port, () =>{
	console.log(`Server started on port ${port}`)

});