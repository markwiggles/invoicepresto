class BillersController < ApplicationController
  def index
    @billers = Biller.all
    render json: @billers 
      # billers: [] 
  end    
end
