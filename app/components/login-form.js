import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  ifMatches: false,
  actions: {
    login(){
      var matches = [];
      let {email, password} = this.getProperties('email', 'password');
      var currSession = this.get("session");
      this.get('users').forEach(function(user) {
        var dbEmail = user.get('email');
        var dbPassword = user.get('password');

        if((email === dbEmail) && (password === dbPassword)) {
          console.log(matches);
          //
          // this.set('ifMatches', true);
          matches.push(true);
        } else {
          matches.push(false);
        }
      });
      if( matches[0] === true ){
        this.get("session").login(email, password).then(function(){
          this.transitionTo('index');

        }).catch((reason)=>{
          console.log("Error: " + reason);
        });
        this.transitionTo('index');
      }
    },
    transitionToPreviousRoute(){
      var previousTransition = this.get('previousTransition');
      if(previousTransition){
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.transitionTo('index');
      }
    }
  }
});
