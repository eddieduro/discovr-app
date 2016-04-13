import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      pictures: this.store.findAll('picture')
    })
  },
  actions: {
    transitionToProfile(sessionUser) {
      this.transitionTo('profile', sessionUser);
    }

  }
});
