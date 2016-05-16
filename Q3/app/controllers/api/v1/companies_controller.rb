class Api::V1::CompaniesController < ApplicationController
  #bonus1
  def index
    companies = Company.order(:created_at)
    render json: companies
  end
  
end
