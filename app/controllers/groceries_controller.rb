class GroceriesController < ApplicationController

	def index
	end

	def show
	end

	def shelf
		render json: Item.all
	end

end
