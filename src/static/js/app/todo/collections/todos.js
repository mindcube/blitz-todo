define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Todo = require('app/todo/models/todo');
    var localStorage = require('localStorage');

    window.TodoModel = Todo;

    return Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("todos"),

        model: Todo,
    });

});