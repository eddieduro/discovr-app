import Ember from 'ember';

export default Ember.Service.extend({
  users: [],

  add(user){
    var userArray = this.get('users');
    console.log(userArray[0], user)
    if(this.get('users')[0] !== user){
      this.get('users').pushObject(user);
    } else {
      userArray.forEach(function(currentUser){
        if(user !== currentUser) {
          this.get('users').pushObject(user);
        } else {
          alert("Can't like it twice, dummy ;)");
        }
      });
    }
    console.log(this.get('users').length)
  }
});
