import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    register: function() {
      var params = {
        email:  this.get('email'),
        password:  this.get('password')
      }
    this.sendAction('register', params);
    this.transitionTo('login');
      // var newUser = this.store.createRecord('user', {
      //
      // });

      // user.save();
     }
   }
});
