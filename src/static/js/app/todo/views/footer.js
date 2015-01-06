define(function(require, exports, module) {
    var Marionette = require('marionette');

    footerTemplate = require('hbs!app/todo/templates/footer');

    var FooterView = Marionette.Layout.extend({
        template: footerTemplate,

        ui: {
            count: '#todo-count strong',
            clear: '#clear-completed'
        },

        events: {
            'click @ui.clear': 'clearCompleted',
        },

        update: function () {
            this.ui.count.html(this.collection.length);
        },

        serializeData: function () {
            return {
                totalCount: this.collection.length,
            };
        },

        clearCompleted: function() {
            var completed = this.collection.getCompleted();
            completed.forEach(function (todo) {
                todo.destroy();
            });
        }
    });

    exports.FooterView = FooterView;
});