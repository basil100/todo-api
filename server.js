/**
 * Created by basil on 1/20/16.
 */

var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
    id: 1,
    description: 'Meet a friend for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'Study for exam',
    completed: true
}];

app.get('/', function(req, res){
    res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res) {
    res.json(todos);
});
// GET /todos/:id
app.get('/todos/:id', function(req, res) {
    var todoId = req.params.id;
    var matchTodo;

    todos.forEach(function(todo){
        if(todo.id === parseInt(todoId)) {
            matchTodo = todo;
        }
    });

    if(matchTodo) {
        res.json(matchTodo);
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, function(){
    console.log('Express listening on port ' + PORT + '!');
});
