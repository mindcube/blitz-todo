define(function(require, exports, module) {

var Marionette = require('marionette');

var TodoCollection = require('app/todo/collections/todos').TodoCollection;

var HeaderView = require('app/todo/views/header').HeaderView;

describe("Todo app", function(){

    var todo_collection;
    var header_view;
    var testitem;

    it('creates an empty collection of todo tasks', function() {
        todo_collection = new TodoCollection();

        expect(todo_collection).toBeDefined();
        expect(todo_collection.length).toEqual(0)
    });

    it('adds a todo task to the list of tasks', function() {
        testitem = todo_collection.create({name: 'Test Task'});

        expect(todo_collection.length).toEqual(1);
    });

    it('removes a todo task from the list of tasks', function() {
        todo_collection.remove(testitem);

        expect(todo_collection.length).toEqual(0);
    });
});

});