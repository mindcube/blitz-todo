define(function(require, exports, module) {

    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: '',
            completed: false
        },

        toggle: function () {
            return this.set('completed', !this.get('completed'));
        }
    });

});