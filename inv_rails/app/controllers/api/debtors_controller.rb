class Api::DebtorsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
      render json: Debtor.all       
  end

  def show
    render json: Debtor.find(params[:id])
  end

  def create
    debtor = Debtor.new
    set_debtor_params debtor
    debtor.save!
    render json: debtor
  end

  def update
    debtor = Debtor.find(params[:id])
    set_debtor_params debtor
    debtor.save!
    render json: debtor
  end

  def destroy
    debtor =Debtor.find(params[:id])
    debtor.destroy
    render json: {}
  end

  def set_debtor_params debtor
    debtor.name = params[:debtor]['name']
    debtor.email = params[:debtor]['email']
    debtor.phone = params[:debtor]['phone']
    debtor.selected = params[:debtor]['selected']
  end

end
