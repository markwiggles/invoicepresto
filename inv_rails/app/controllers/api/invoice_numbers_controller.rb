class Api::InvoiceNumbersController < ApplicationController

	skip_before_action :verify_authenticity_token

  def index
      render json: InvoiceNumber.all       
  end

  def show
    render json: InvoiceNumber.find(params[:id])
  end

  def create
    invoice_number = InvoiceNumber.new
    set_invoice_number_params invoice_number
    invoice_number.save!
    render json: invoice_number
  end

  def update
    invoice_number = InvoiceNumber.find(params[:id])
    set_invoice_number_params invoice_number
    invoice_number.save!
    render json: invoice_number
  end

  def destroy
    invoice_number =InvoiceNumber.find(params[:id])
    invoice_number.destroy
    render json: {}
  end

  def set_invoice_number_params invoice_number
    invoice_number.name = params[:invoice_number]['name']
    invoice_number.nextnum_int = params[:invoice_number]['nextnum_int']
    invoice_number.nextnum_str = params[:invoice_number]['nextnum_str']
    invoice_number.selected = params[:invoice_number]['selected']
  end
end
