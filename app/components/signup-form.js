import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    register: function() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email:  this.get('email'),
        password:  this.get('password'),
        profilePicture: this.get('profilePicture')
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
