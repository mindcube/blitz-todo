define(function(require, exports, module) {
    var Marionette = require('marionette');
    var itemView = require('app/todo/views/item');
    var mainTemplate = require('hbs!app/todo/templates/main');

    return Marionette.CompositeView.extend({
        className: 'table table-hover',
        tagName: 'table',
        template: mainTemplate,
        itemView: itemView,
        itemViewContainer: 'tbody'
    });
});