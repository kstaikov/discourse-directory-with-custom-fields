import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'foos',
  initialize() {

     withPluginApi('0.8.7', api => {       
		api.decorateWidget('hamburger-menu:generalLinks', () => {
    		return { href: '/foos', rawLabel: 'Directory' };
		})
     });

  }
}

