import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteImage(picture){
      this.sendAction('deleteImage', picture);
    }
  }
});
