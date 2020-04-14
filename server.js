const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./models/db'); //importing route

// render view page
app.get('/', function (req, res) {
	request.get({
	    url: 'http://localhost:3000/users',
	    header: {'Content-Type': 'application/json'}
	}, function (error, response, body) {
	    res.render('index', {
	    	users: JSON.parse(response.body)
	    });
	});
})

app.get('/register', function (req, res) {
	if(req.query && req.query.status) {
		res.render('register', {
			status: req.query.status
		});
	} else {
		res.render('register', {status: ''});
	}
})

app.get('/edit', function (req, res) {
	if(req.query && req.query.id) {
		request.get({
		    url: 'http://localhost:3000/get-user/'+req.query.id,
		    header: {'Content-Type': 'application/json'}
		}, function (error, response, body) {
			// console.log('AA edit', JSON.parse(response.body))
		    res.render('edit', {
		    	userdata: JSON.parse(response.body)
		    });
		});
	} else {
		res.render('/');
	}
})


// API - GET all users
app.get('/users', (request, response) => {
    db.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// API -GET single user by ID
app.get('/get-user/:id', (request, response) => {
    const id = request.params.id;
 
    db.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// API - Register new user
app.post('/create', (request, response) => {
	let req = request.body;

	db.query('SELECT email FROM users', (error, result) => {
        if (error) throw error;
        var all_email = JSON.parse(JSON.stringify(result));
        
        for(var i=0; i < Object.keys(all_email).length; i++) {
        	if(all_email[i].email == req.email) {
        		response.redirect('/register?status=exist')
        		return
        	}
        }
        //save to db if new user
	    db.query('INSERT INTO users SET ?', request.body, (error, result) => {
	        if (error) throw error;
	        response.redirect('/register?status=success')
	    });  

    });

    
});

function checkExistUser(email) {
	db.query('SELECT email FROM users', (error, result) => {
        if (error) throw error;
        var all_email = JSON.parse(JSON.stringify(result));
        var exist = 'false';

        for(var i=0; i < Object.keys(all_email).length; i++) {
        	if(all_email[i].email == email) {
        		exist = 'true';
        	}
        }

        return exist;
    });

    db.end(); 
}

// API - Update an existing user
app.put('/edit-user/:id', (request, response) => {
    const id = request.params.id;
 
    db.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
        response.send('User updated successfully.');
    });
});

// API - Delete a user
app.delete('/delete-user/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('User deleted.');
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
