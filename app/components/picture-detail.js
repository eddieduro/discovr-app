import Ember from 'ember';

export default Ember.Component.extend({

  formHide: false,
  actions: {

    formShow(){
      this.set('formHide', true);
    },
    deleteImage(picture){
      if(confirm("Are you sure you want to delete this picture?")){
        this.sendAction('deleteImage', picture);
      }
    },
    updateDetails(picture) {
      var params = {
        description: this.get('description'),
        tags: this.get('tags')
      }
      this.set('formHide', false);
      this.sendAction('updateDetails', picture, params);
    }
  }
});
