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
        profilePicture:  this.get('profilePicture') ? this.get('profilePicture'): "http://picturepan2.github.io/spectre/demo/img/avatar-1.png"
      }
    console.log(this.get('users'));
    this.get('users').every(function(user){
      var userEmail = user.get('email');
      console.log(userEmail, params.email);
      if(userEmail === params.email) {
        alert("Account with that email already exists!");
        return false;
      } else if (userEmail !== params.email) {
        alert("Registration Successful!");
        return false;
      }
    })

    this.sendAction('register', params);
    this.transitionTo('login');
      // var newUser = this.store.createRecord('user', {
      //
      // });

      // user.save();
     }
   }
});
