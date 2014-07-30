define(function(require, exports, module) {
    var Marionette = require('marionette');
    var todoItemTemplate = require('hbs!app/todo/templates/item');

    var Item = Marionette.CompositeView.extend({
        className: 'active',
        tagName: 'tr',
        template: todoItemTemplate,
        value: '',

        events: {
            'click .remove': 'destroy',
            'click .toggle': 'toggle',
        },

        initialize: function () {
            this.value = this.model.get('name');

            this.listenTo(this.model, 'change', this.render, this);
        },

        destroy: function () {
            this.model.destroy();
        },

        toggle: function () {
            this.model.toggle().save();
        },
    });

    exports.Item = Item;
});