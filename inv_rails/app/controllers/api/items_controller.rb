class Api::ItemsController < ApplicationController

	skip_before_action :verify_authenticity_token

  def index
      render json: Item.all       
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    item = Item.new
    set_item_params item
    item.save!
    render json: item
  end

  def update
    item = Item.find(params[:id])
    set_item_params item
    item.save!
    render json: item
  end

  def destroy
    item =Item.find(params[:id])
    item.destroy
    render json: {}
  end

  def set_item_params item
    item.name = params[:item]['name']
    item.description = params[:item]['description']
    item.price = params[:item]['price']
    item.selected = params[:item]['selected']
  end
end
