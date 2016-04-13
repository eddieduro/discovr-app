import Ember from 'ember';

export default Ember.TextField.extend({
  type: 'file',
  change: function(e) {
    let self = this;

    var inputFiles = e.target.files;
    if (inputFiles.length < 1) {
      return;
    }

    let inputFile = inputFiles[0];

    let fileInfo = {
      user: this.get('user'),
      description: this.get('description') ? this.get('description'): "",
      tags: this.get('tags') ? this.get('tags'): "",
      name: inputFile.name,
      type: inputFile.type || 'n/a',
      size: inputFile.size,
      date: inputFile.lastModifiedDate ?
            inputFile.lastModifiedDate.toLocaleDateString() : 'n/a',
    };
    console.log(fileInfo.type);
    if((fileInfo.size < 10000000) && (fileInfo.type === (('image/png') || ('image/jpg')))) {
      var fileReader = new FileReader();

      fileReader.onload = function(e) {
        let fileReader = e.target;
        fileInfo.dataURL = fileReader.result;

        self.sendAction('fileChanged', fileInfo);
      };

      let firstFile = e.target.files[0];
      fileReader.readAsDataURL(firstFile);
    } else {
      alert("no bueno");
    }

  },
});
