class Api::TaxesController < ApplicationController

	skip_before_action :verify_authenticity_token

  def index
      render json: Tax.all       
  end

  def show
    render json: Tax.find(params[:id])
  end

  def create
    tax = Tax.new
    set_tax_params tax
    tax.save!
    render json: tax
  end

  def update
    tax = Tax.find(params[:id])
    set_tax_params tax
    tax.save!
    render json: tax
  end

  def destroy
    tax =Tax.find(params[:id])
    tax.destroy
    render json: {}
  end

  def set_tax_params tax
    tax.name = params[:tax]['name']
    tax.description = params[:tax]['description']
    tax.percentage = params[:tax]['percentage']
    tax.selected = params[:tax]['selected']
  end
end
