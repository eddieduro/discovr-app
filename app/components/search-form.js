import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    search(){
      var params = {
        tag: this.get('search')
      };
      this.set('search', "");
      this.sendAction('search', params);
    }
  }
});
