export default Discourse.Route.extend({
  titleToken() {
    return I18n.t('newdirs.title');
  },

  model(params) {
    return this.store.findAll('newdir', params);
  },

  setupController(controller, model) {
    model.content.sort(function(userA, userB) {
        var userABuilding = userA.custom_fields.user_field_1.replace(/[^0-9a-z]/gi, '').split(/(\d+)/)[0];
        var userANum = parseInt(userA.custom_fields.user_field_1.replace(/[^0-9a-z]/gi, '').split(/(\d+)/)[1]);
        var userBBuilding = userB.custom_fields.user_field_1.replace(/[^0-9a-z]/gi, '').split(/(\d+)/)[0];
        var userBNum = parseInt(userB.custom_fields.user_field_1.replace(/[^0-9a-z]/gi, '').split(/(\d+)/)[1]);

        if (userABuilding < userBBuilding) {
            return -1;
        }
        
        if (userABuilding > userBBuilding) {
            return 1;
        }

        if (userANum < userBNum) {
            return -1;
        }

        if (userANum > userBNum) {
            return 1;
        }

        return 0;
    });
    controller.set('newdirs', model);
  }
});
