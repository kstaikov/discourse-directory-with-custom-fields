# name: custom-dir
# about: User directory with custom fields.
# version: 0.0.1
# authors: Kiril Staikov


after_initialize do
  UserNameSerializer.attributes :custom_fields, :user_fields
end
