# name: new-dir
# about: New directory with custom fields.
# version: 0.0.1
# authors: Kiril Staikov


add_admin_route 'foos.title', 'foos'
after_initialize do
    #require_dependency 'application_controller'
    
    class ::PluginUserDirSerializer < ::BasicUserSerializer
      attributes :name, :title, :custom_fields, :user_fields
    end

    class ::FoosController < ::ApplicationController

      def index
        result = User.where("id > 0")

        render_json_dump(foos: serialize_data(result, PluginUserDirSerializer))
      end
    end

    Discourse::Application.routes.append do
      resources :foos
      get '/admin/plugins/foos' => 'admin/plugins#index'
    end
end
