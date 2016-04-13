import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    save(file){
      // console.log(file);
      var newImg = this.store.createRecord('picture', file);
      var user = file.user;
      user.get('pictures').addObject(newImg);
      newImg.save().then(function(){
       return user.save();
      });
      this.transitionTo('profile', file.user);
    },
    updateDetails(picture, params){
      console.log(picture, "picture");
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          picture.set(key, params[key]);
        }
      });
      picture.save();
      this.transitionTo('profile');
    },
    deleteImage(picture){
      return picture.destroyRecord();
    }
  } 
});
