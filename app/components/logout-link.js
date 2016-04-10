import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    logout(){
      this.set('loggedin', false)
      this.get('session').logout();
    }
  }
});
