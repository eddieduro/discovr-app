import Ember from 'ember';

const PAGE_SIZE = 6;

export default Ember.Route.extend({
  session: Ember.inject.service(),
  startAt: null,
  endAt: null,
  page: 0,
  hidePrev: true,
  hideNext: false,
  model(){
    var query = {
        limitToFirst: PAGE_SIZE+1
      };

      if (this.get('startAt')) {
        query.startAt = this.get('startAt');
      }

      if (this.get('endAt')) {
        query.endAt = this.get('endAt');
        delete query.limitToFirst;
        query.limitToLast = PAGE_SIZE+1;
      }
      console.log(query);
      return this.store.query('picture', query).then((pictures) => {
        if (this.get('startAt')) {
          console.log(pictures.slice(1))
          return pictures.slice(1);
        } else {
          return pictures.slice(0, pictures.get('length')-1);
        }
      });
    },
  actions: {
    transitionToProfile(sessionUser) {
      this.transitionTo('profile', sessionUser);
    },

    prev() {
      var id = this.get('currentModel').get('firstObject.id');
      this.set('startAt', null);
      this.set('endAt', id);
      if(this.get('page') === 0){
        this.set('hidePrev', true);
        this.set('hideNext', false);
      }
      var page = this.get('page');
      page = page - 1;
      console.log(this.get('page'));
      this.refresh();
    },

    next() {
      var id = this.get('currentModel').get('lastObject.id');
      this.set('startAt', id);
      this.set('endAt', null);
      var page = this.get('page');
      page = page + 1;
      if(this.get('page') > 0){
        this.set('hidePrev', false)
        this.set('hideNext', false)
      }
      this.refresh();
    }
  },
});
