export default Discourse.Route.extend({
  titleToken() {
    return I18n.t('foos.title');
  },

  model(params) {
    return this.store.findAll('foo', params);
  },

  setupController(controller, model) {
    controller.set('foos', model);
  }
});
