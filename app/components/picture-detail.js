import Ember from 'ember';

export default Ember.Component.extend({

  formHide: false,
  actions: {

    formShow(){
      if(this.get('formHide') === false){
        this.set('formHide', true);
      } else{
        this.set('formHide', false);
      }
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
