define(function(require, exports, module) {
    var Marionette = require('marionette');

    footerTemplate = require('hbs!app/todo/templates/footer');

    var FooterView = Marionette.Layout.extend({
        template: footerTemplate,

        ui: {
            count: '#todo-count strong'
        },

        events: {
            'click #clear-completed': 'clearCompleted',
        },

        initialize: function () {
            //this.listenTo(this.collection, 'all', this.update, this);
            // this.listenTo(this.collection, 'all remove', this.update, this);
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
            console.log(this);
        }
    });

    exports.FooterView = FooterView;
});