import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('user');
  },
  actions: {
    register: function(params) {

      var newUser = this.store.createRecord('user', params);

      newUser.save();
     }
  }
});
