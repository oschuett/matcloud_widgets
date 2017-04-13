// toggle display of all code cells' inputs

//define([
//    'jquery',
//    'base/js/namespace',
//    'base/js/dialog',
//    'base/js/events',
//    'base/js/utils',
//    'require',
//], function(
//    $,
//    Jupyter,
//    dialog,
//    events,
//    utils,
//    require
//) {
//    "use strict";
//
//    
//    ////==========================================================================
//    //var load_ipython_extension = function() {
//    //    alert("matcloud-widgets loaded");
//    //};
//    //
//    ////==========================================================================
//    //return {
//    //    load_ipython_extension : load_ipython_extension
//    //};
//});


define([
    'jquery',
    'require',
], function(
    $,
    require
) {
    "use strict";

    
    //==========================================================================
    var load_ipython_extension = function() {
    //    alert("matcloud-widgets loaded");
    // TODO: inject CSS
    };
    
    ////==========================================================================
    return {
        load_ipython_extension : load_ipython_extension
    };
});


define('matcloud_widgets', ["jupyter-js-widgets"], function(widgets) {

    var InfoBubbleView = widgets.DOMWidgetView.extend({

        render: function() {
            $('<i class="fa fa-question-circle"></i>').appendTo(this.el);
            this.value_changed();
            this.model.on('change:value', this.value_changed, this);    
        },

        value_changed: function() {
            var txt = this.model.get('value')
            $(this.el).children().attr("title", txt);
        },
    });

    return {
        InfoBubbleView : InfoBubbleView
    };
});

// define('hello', ["jupyter-js-widgets"], function(widgets) {
// 
//     var HelloView = widgets.DOMWidgetView.extend({
// 
//         render: function() {
//             this.value_changed();
//             this.model.on('change:value', this.value_changed, this);
//         },
// 
//         value_changed: function() {
//             this.el.textContent = this.model.get('value');
//         },
//     });
// 
//     return {
//         HelloView : HelloView
//     };
// });