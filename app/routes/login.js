import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(){
    return this.store.findAll('user');
  },
  actions: {
    login(currentUser){
      this.transitionTo('profile', currentUser[0])
    },
    transitionToProfile(currentUser){
      this.sendAction('index', currentUser[0])
    }
  }
});
