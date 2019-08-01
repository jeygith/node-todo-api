// save new something


var newTodo = new Todo({
    text: 'Cook Dinner'
});


newTodo.save().then((result) => {
    console.log('saved todo', result);
}, (err) => {
    console.log('Unable to save todo');
    console.log(err);
});

var otherTodo = new Todo({
    text: 'Feed the cat',
    completed: true,
    completedAt: 123
});

otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('unable to save todo', e);
});


var user = new User({});

user.save().then((doc) => {
    console.log('user saved', doc)
}, (err) => {
    console.log('unable to save user', err)
})