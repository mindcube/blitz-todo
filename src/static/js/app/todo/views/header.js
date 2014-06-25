define(function(require, exports, module) {
    var Marionette = require('marionette');
    var headerTemplate = require('hbs!app/todo/templates/header');

    return Marionette.ItemView.extend({
        template: headerTemplate,

        ui: {
            input: '#new-task'
        },

        events: {
            'keypress #new-task': 'onTaskEnter'
        },

        onTaskEnter: function(e) {
            taskName = e.currentTarget.value;

            if (e.charCode === 13 && taskName.length > 0) {

                // create new task item
                this.collection.create({
                    name: taskName
                });

                this.ui.input.val('');
            }
        }
    });
});