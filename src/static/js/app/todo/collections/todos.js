define(function(require, exports, module) {

    var Backbone = require('backbone');
    var Todo = require('app/todo/models/todo');
    var localStorage = require('localStorage');

    var TodoCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("todos"),

        model: Todo,

        comparator: function(s) {
            return -s.get('date_created');
        },

        displayActiveTasks: function() {
            return this.filter(function(task) {
                if (!task.get('completed'))
                    return true;
            });
        },

        displayCompletedTasks: function() {
            return this.filter(function(task) {
                if (task.get('completed'))
                    return true;
            });
        }
    });

    exports.TodoCollection = TodoCollection;

});