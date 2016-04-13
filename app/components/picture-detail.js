import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
      this.sendAction('updateDetails', picture, params);
    }
  }
});
