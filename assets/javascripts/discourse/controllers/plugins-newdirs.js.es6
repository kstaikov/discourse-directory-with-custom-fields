import { observes } from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),

  @observes("newdirs.canLoadMore")
  _showFooter() {
    this.set("application.showFooter", !this.get("newdirs.canLoadMore"));
  },

  actions: {
    loadMore() {
      this.get('newdirs').loadMore();
    }
  }
});
