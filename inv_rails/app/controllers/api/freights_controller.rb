class Api::FreightsController < ApplicationController

	skip_before_action :verify_authenticity_token

  def index
      render json: Freight.all       
  end

  def show
    render json: Freight.find(params[:id])
  end

  def create
    freight = Freight.new
    set_freight_params freight
    freight.save!
    render json: freight
  end

  def update
    freight = Freight.find(params[:id])
    set_freight_params freight
    freight.save!
    render json: freight
  end

  def destroy
    freight =Freight.find(params[:id])
    freight.destroy
    render json: {}
  end

  def set_freight_params freight
    freight.name = params[:freight]['name']
    freight.description = params[:freight]['description']
    freight.price = params[:freight]['price']
    freight.selected = params[:freight]['selected']
  end
end
