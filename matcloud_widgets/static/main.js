define([
    'jquery',
    'require',
], function(
    $,
    require
) {
    "use strict";
    
    var load_ipython_extension = function() {
        // do nothing
    };
    
    return {
        load_ipython_extension : load_ipython_extension
    };
});


define('matcloud_widgets', ["jupyter-js-widgets"], function(widgets) {

    var InfoBubbleView = widgets.DOMWidgetView.extend({

        render: function() {
            $('<i class="fa fa-question-circle"></i>').appendTo(this.$el);
            this.value_changed();
            this.model.on('change:value', this.value_changed, this);    
        },

        value_changed: function() {
            var txt = this.model.get('value')
            this.$el.children("i").attr("title", txt);
        },
    });

    return {
        InfoBubbleView : InfoBubbleView
    };
});
