import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    updateDetails(picture) {
      var params = {
        description: this.get('description'),
        tags: this.get('tags')
      }
      this.sendAction('updateDetails', picture, params);
    }
  }
});
