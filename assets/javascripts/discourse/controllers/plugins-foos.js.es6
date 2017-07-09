import { observes } from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  @observes("foos.canLoadMore")
  _showFooter() {
    this.set("application.showFooter", !this.get("foos.canLoadMore"));
  },

  actions: {
    loadMore() {
      this.get('foos').loadMore();
    }
  }
});
