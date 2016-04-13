import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    register: function(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      console.log(newUser.get('profilePicture'), newUser);
    },

    // save(file){
    //   var newImg = this.store.createRecord('picture', file);
    //   var user = file.user;
    //   user.get('pictures').addObject(newImg);
    //   newImg.save().then(function(){
    //    return user.save();
    //   });
    // }
  }
});
