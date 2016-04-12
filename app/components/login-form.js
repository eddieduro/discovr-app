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
          matches.push(true);
          currentUser.push(user);
        } else {
          matches.push(false);
        }
      });
      if( matches[0] === true ){
        this.get("session").login(currentUser).then(function(){
          console.log(this.get('session').get('currentUser'))
          this.transitionTo('index');

        }).catch((reason)=>{
          console.log("Error: " + reason);
        });
      }
      this.transitionTo('index');
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
