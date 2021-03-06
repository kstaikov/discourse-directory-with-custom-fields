# name: new-dir
# about: New directory with custom fields.
# version: 0.1
# authors: Kiril Staikov


after_initialize do
    #require_dependency 'application_controller'
    
    class ::PluginUserDirSerializer < ::BasicUserSerializer
      attributes :name, :email, :custom_fields, :user_fields
    end

    class ::PluginUserFieldMapSerializer < ::ApplicationSerializer
        attributes :id, :name, :description
    end

    class ::NewdirsController < ::ApplicationController

      def index
        result = User.human_users.where(active: true).where('username NOT LIKE :query', query: 'anon%')
        field_map = UserField.select('*')

        render_json_dump(newdirs: serialize_data(result, PluginUserDirSerializer), field_map: serialize_data(field_map, PluginUserFieldMapSerializer))
      end
    end

    Discourse::Application.routes.append do
      resources :newdirs
    end
end
