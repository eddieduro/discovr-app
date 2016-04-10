import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      user: this.store.findAll('user')
    })
  },
  actions: {

  }
});
