class BillersController < ApplicationController
  def index
    @billers = Biller.all
    respond_to do |format|
      format.json { render json: @billers }
      # billers: []
    end  
  end    
end
