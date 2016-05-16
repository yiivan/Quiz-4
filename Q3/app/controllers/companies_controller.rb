class CompaniesController < ApplicationController

  def index
    companies = Company.order(:created_at)
    render json: companies
  end

end
