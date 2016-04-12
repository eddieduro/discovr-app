import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  ifMatches: false,
  actions: {
    login(){
      var matches = [];
      var currentUser = [];
      let {email, password} = this.getProperties('email', 'password');
      var currSession = this.get("session");
      this.get('users').forEach(function(user) {
        var dbEmail = user.get('email');
        var dbPassword = user.get('password');

        if((email === dbEmail) && (password === dbPassword)) {
          //
          // this.set('ifMatches', true);
          matches.unshift(true);
          currentUser.push(user);
        } else {
          matches.push(false);
        }
      });
      console.log(matches[0]);
      if( matches[0] === true ){
        this.get("session").login(currentUser)
        this.sendAction('login', currentUser);
      }
    },
    transitionToPreviousRoute(){
      var previousTransition = this.get('previousTransition');
      if(previousTransition){
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.transitionTo('index', );
      }
    }
  }
});
