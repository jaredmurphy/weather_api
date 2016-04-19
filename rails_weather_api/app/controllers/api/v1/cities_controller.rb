  class Api::V1::CitiesController < Api::V1::BaseController

    def index
      @cities = City.all
      render json: @cities
    end

    def show 
      @city = City.find(params[:id])
      render json: @city
    end
    
    def new 
      @city = City.new
      render :nothing => true
    end

    def create 
      @city = City.new(params[:city])
      respond_to do |format|
         if @city.save
            format.json { render json: @city, status: :created }
         else
            format.json { render json: @city.errors, status:
            unprocessable_entity }
         end
      end
    end

    private

    def city_params
        params.require(:city).permit(:name, :temp, :humidity, :description,
        :wind)
    end
end

