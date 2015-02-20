class Api::BankDetailsController < ApplicationController

	skip_before_action :verify_authenticity_token

  def index
      render json: BankDetail.all       
  end

  def show
    render json: BankDetail.find(params[:id])
  end

  def create
    bank_detail = BankDetail.new
    set_bank_detail_params bank_details
    bank_detail.save!
    render json: bank_detail
  end

  def update
    bank_detail = BankDetail.find(params[:id])
    set_bank_detail_params bank_detail
    bank_detail.save!
    render json: bank_detail
  end

  def destroy
    bank_detail =BankDetail.find(params[:id])
    bank_detail.destroy
    render json: {}
  end

  def set_bank_detail_params bank_detail
    bank_detail.name = params[:bank_detail]['name']
    bank_detail.account_number = params[:bank_detail]['account_number']
    bank_detail.selected = params[:bank_detail]['selected']
  end
end
