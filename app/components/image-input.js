import Ember from 'ember';

export default Ember.Component.extend({
  file: null,
  actions: {
    fileSelectionChanged: function(file) {
      console.log(file , "2nd lvl");
      this.set('file', file)
      this.sendAction("fileSelectionChanged", file);
    },
  },
});
