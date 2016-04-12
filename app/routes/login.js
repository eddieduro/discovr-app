import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(){
    return this.store.findAll('user');
  },
  actions: {
    login(currentUser){
      console.log(currentUser);
      this.transitionTo('profile', currentUser[0])
    }
  }
});
