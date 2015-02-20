class Api::BillersController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
      render json: Biller.all       
  end

  def show
    render json: Biller.find(params[:id])
  end

  def create
    biller = Biller.new
    set_biller_params biller
    biller.save!
    render json: biller
  end

  def update
    biller = Biller.find(params[:id])
    set_biller_params biller
    biller.save!
    render json: biller
  end

  def destroy
    biller =Biller.find(params[:id])
    biller.destroy
    render json: {}
  end

  def set_biller_params biller
    biller.name = params[:biller]['name']
    biller.email = params[:biller]['email']
    biller.phone = params[:biller]['phone']
    biller.selected = params[:biller]['selected']
  end

end
