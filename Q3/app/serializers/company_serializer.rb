class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :products
  # has_many :likes

end
