define(function(require, exports, module) {

    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            completed: false,
            date_created: Date.now()
        },

        toggle: function () {
            return this.set('completed', !this.get('completed'));
        },

        isCompleted: function () {
            return this.get('completed');
        }
    });

});