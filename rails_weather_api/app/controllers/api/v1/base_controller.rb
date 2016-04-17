  class Api::V1::BaseController < ApplicationController
  #  protect_from_forgery with: :null_session
    before_action :destroy_session
    after_filter :cors_set_access_control_headers
    def cors_set_access_control_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
      headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
      headers['Access-Control-Max-Age'] = "1728000"
    end

    def destroy_session
      request.session_options[:skp] = true
    end

    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    def not_found
      return api_error(status: 404, errors: 'Not found')
    end
    #respond_to :json

    ### public resource methods
      

#    def get_resource 
#      instance_variable_get("@#{resource_name}")
#    end

#    def query_params
#      {}
#    end

#    def page_params
#      params.permit(:page, :page_size)
#    end

#    def resource_name
#      @resource_name ||= self.controller_name.singularize
#    end

#    def resource_params
#      @resource_params ||= self.send("#{resource_name}_params")
#    end

#    def set_resource(resource = nil)
#      resource ||= @resource_class.find(params[:id])
#      instance_variable_set("@#{resource_name}", resource)
#    end
#  end

    #POST /ai/{pluarl_resource_name}
#    def create 
#      set_resource (@resource_class.new(resource_params))
#
#      if get_resource.save
#          render :show, status: :created
#      else 
#        render json: get_resource.errors, status: unprocessable_entity
#      end
#    end
#
#    #DELTE /apli/{plural_resource_name_/1
#    def destroy
#      get_resource.destroy
#      head :no_content
#    end
#
#    #GET /api/{plural_resource_name}
#    def index
#      plural_resource_name = "@{resoure_name.pluralize}"
#      resources = @resource_class.where(query_params)
#        .page(page_params[:page])
#        .per(page_params[:page_size])
#
#        instance_variable_set(plural_resource_name, resources)
#        respond_with instance_variable_get(plural_resource_name)
#    end
#
#    #GET /api/{plural_resource_name}/1
#    def show
#      respond_with get_resource
#    end
#
#    #Path/Put /api{plural_resource_name}/1
#    def update
#      if get_resource.update(resource_params)
#        render :show
#      else 
#        render json: get_resource.errors, status: :unprocessable_entity
#      end
    end


