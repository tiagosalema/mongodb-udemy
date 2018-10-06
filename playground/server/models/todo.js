const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', { 
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null    
    }
});
module.exports = { Todo };
// var newTodo = new ToDo({
//     text: 'Cook dinner'
// });

// newTodo
//   .save()
//   .then( doc => console.log('Saved todo', doc), err => console.log('Unable to save todo', err) );

// var anotherTodo = new ToDo({ text: '      some text     ' });

// anotherTodo.save().then( result => console.log(result) );