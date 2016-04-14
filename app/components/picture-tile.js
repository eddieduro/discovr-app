import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteImage(picture){
      this.sendAction('deleteImage', picture);
    },
    updateDetails(picture, params){
      this.sendAction('updateDetails', picture, params);
    }
  }
});
