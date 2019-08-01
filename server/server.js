var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// save new something

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});


newTodo.save().then((result)=>{
    console.log('saved todo', result);
}, (err)=>{
    console.log('Unable to save todo');
    console.log(err);
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc)=>{
    console.log(JSON.stringify(doc, undefined, 2));
}, (e)=>{
    console.log('unable to save todo', e);
})