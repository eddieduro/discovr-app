import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    register: function(params) {

      var newUser = this.store.createRecord('user', params);

      newUser.save();
     }
  }
});
