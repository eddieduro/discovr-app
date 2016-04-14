import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findAll('picture').then(function(pictures){
      var results = [];
      var tag = params.search_id;
      pictures.forEach(function(picture){
        var dbTag = picture.get('tags');
        if(tag === dbTag){
          results.push(picture);
        }
      });
      if(!results[0]) {
        alert("No results found");
      } else {
        return results;
      }
    })
  }
  // actions:{
  //   search(){
  //     var pictures = this.store.query('picture', {tags: tag});
  //     console.log(pictures, params);
  //     for(var i = 0; i < pictures.get('length'); i++){
  //       console.log("works");
  //       if(pictures[i].tags === tag){
  //         results.push(picture);
  //       }
  //     }
  //   }
  // }
});
