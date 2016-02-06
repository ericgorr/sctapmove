// ==========================================================================
// Project:   Sctapmove - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals Sctapmove */

// This page describes the main user interface for your application.
Sctapmove.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
mainPane: SC.MainPane.design({

    childViews: [ 'thescrollview' ],

    thescrollview: SC.ScrollView.extend({

      hasHorizontalScroller:  NO,
      hasVerticalScroller:    YES,

      contentView: SC.View.extend({
        childViews: ['labelView', 'theField', 'farlabel', 'theFieldB' ],
        childViewLayout: SC.View.VERTICAL_STACK,

        labelView: SC.LabelView.design({
          layout: { height: 24 },
          tagName: "h1",
          value: "Top Label"
        }),

        theField: SC.TextFieldView.extend({
          isTextArea: true,
          layout: { height: 900 },
          value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }),


        farlabel: SC.LabelView.design({
          layout: { height: 24 },
          tagName: "h1",
          value: "Bottom Label"
        }),

        theFieldB: SC.TextFieldView.extend({
          isTextArea: true,
          layout: { height: 50 },
          value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }), 
      }),
    })
  }) 

});
