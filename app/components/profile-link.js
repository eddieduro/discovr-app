import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    transitionToProfile() {
      var sessionUser = this.get('session').get('currentUser')[0];
      this.sendAction('transitionToProfile', sessionUser);
    }
  }
});
