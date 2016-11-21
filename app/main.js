﻿requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'knockout': [
            '//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.1/knockout-debug.js'
            //'../lib/knockout/knockout-3.4.1'
        ],
        'jquery': [
            '//code.jquery.com/jquery-3.1.1.min.js'
            //'../lib/jquery/jquery-1.9.1.min'
        ],
        'lodash': [
            '//cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js'
            //'../lib/lodash'
        ],
        'jquery-ui': '//code.jquery.com/ui/1.12.1/jquery-ui.min.js',
        'gridstack': '../lib/gridstack/gridstack.min'
    },
     shim:{
        gridstack: {
            deps: ['jquery', 'lodash', 'jquery-ui']
        }
     },
     map: {
        '*': {
            'jquery-ui/widget': 'jquery-ui',
            'jquery-ui/widgets/mouse': 'jquery-ui',
            'jquery-ui/widgets/draggable': 'jquery-ui',
            'jquery-ui/widgets/resizable': 'jquery-ui',
            'jquery-ui/widgets/droppable': 'jquery-ui',
            'jquery-ui/version': 'jquery-ui',
            'jquery-ui/unique-id': 'jquery-ui',
            'jquery-ui/tabbable': 'jquery-ui',
            'jquery-ui/scroll-parent': 'jquery-ui',
            'jquery-ui/safe-blur': 'jquery-ui',
            'jquery-ui/labels': 'jquery-ui',
            'jquery-ui/plugin': 'jquery-ui',
            'jquery-ui/jquery-1-7': 'jquery-ui',
            'jquery-ui/safe-active-element': 'jquery-ui',
            'jquery-ui/keycode': 'jquery-ui',
            'jquery-ui/form': 'jquery-ui',
            'jquery-ui/disable-selection': 'jquery-ui',
            'jquery-ui/focusable': 'jquery-ui',
            'jquery-ui/ie': 'jquery-ui',
            'jquery-ui/data': 'jquery-ui'
        }
     }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function( system, app, viewLocator ) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});
