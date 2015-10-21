import Ember from 'ember';

export default Ember.Controller.extend({
  events: null,

  _initializeEvents: Ember.on('init', function () {
    this.set('events', Ember.A());
  }),

  actions: {
    handleTrixAction(jqEvent) {
      this.get('events').unshiftObject(Ember.Object.create({
        type: jqEvent.type
      }));
    }
  }
});
