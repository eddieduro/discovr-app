import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    logout(){
      this.transitionTo('index');
    },
    search(params){
      this.transitionTo('search', params.tag);
    }
  }
});
