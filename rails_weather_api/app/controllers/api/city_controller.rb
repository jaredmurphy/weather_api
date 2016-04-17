module Api
  class AlbumsController < Api::BaseController

    private
    def city_params
      params.require(:album).permit(:name)
    end

    def query_params
      params.permit(:name)
    end
  end
end

