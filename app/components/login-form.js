import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    login(){
      let {email, password} = this.getProperties('email', 'password');
      this.get("session").login(email, password).then(()=>{
        this.transitionTo('index');
      }).catch((reason)=>{
        console.log("Error: " + reason);
      });
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
