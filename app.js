

const express = require('express');
const exbhbs = require('express-handlebars')

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