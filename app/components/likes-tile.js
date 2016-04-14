import Ember from 'ember';

export default Ember.Component.extend({
  likes: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    addLike(){
      this.get('likes').add(this.get('session').get('currentUser')[0])
    }
  }
});
