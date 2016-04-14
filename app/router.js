import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('profile', {path: '/profile/:profile_id'});
  this.route('search', {path: '/search/:search_id'});
  this.route('loading');
});

export default Router;
