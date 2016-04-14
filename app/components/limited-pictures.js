import Ember from 'ember';

export default Ember.Component.extend({
  queryParams: ['sortProperties', 'sortAscending'],
  sortProperties: ['createdAt'],
  sortAscending: true,

  pageNumber: 0,
  pageSize: 3,

  pages: Ember.computed('picture', 'pageSize', 'sortAscending', function(){
    var pages = [];
    var picturesArr = [];
    var picture = this.get('picture');
    picturesArr.push(picture);
    // console.log(picturesArr);
    while (picturesArr.length > 0){
      pages.push(picturesArr.splice(0, this.get('pageSize')));
    }
    console.log(pages);
    return pages;
  }),
  paginatedPictures: Ember.computed('pages', 'pageNumber', function(){
    return this.get('pages')[this.get('pageNumber')];
  }),
});
