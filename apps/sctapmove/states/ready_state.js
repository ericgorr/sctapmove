Sctapmove.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Sctapmove.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Sctapmove.getPath('mainPage.mainPane').remove();
  }

});

