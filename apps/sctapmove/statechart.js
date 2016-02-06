Sctapmove.statechart = SC.Statechart.create({

  initialState: 'readyState',

  readyState: SC.State.plugin('Sctapmove.ReadyState')
  // someOtherState: SC.State.plugin('Sctapmove.SomeOtherState')

});
