require 'rails_helper'

# api testing
RSpec.describe Api::V1::CitiesController, type: :controller do 

    describe "Get #index" do
        it "returns a 200 HTTP status" do
            get :index, format: :json
            expect(response).to be_success
        end
    end # ends GET #index

    describe "GET #new" do
        it "returns a 200 http status" do
            get :new
            expect(response).to be_success
        end
        it "city should be new" do 
            get :new
            assigns(:city).should be_a_new(City) 
        end
    end #ends GET #new
    
    describe "Post #create" do 
        it "returns a 200 http status" do
            post :create
            expect(response).to be_success
        end
        context 'with valid attributes' do 
            it 'creates city' do 
                city_attributes = FactoryGirl.attributes_for(:city)
                post :create, city: city_attributes
                response.should redirect_to(root_path)
                City.last.name === post_attributes[:name]
            end
            it 'creates city' do 
                post :create, city: attributes_for(:city)
                expect(City.count).to eq(1)
            end
          end
        
        context 'with invalid attributes' do 
            it 'displays new on create failure' do 
                post :create, city: {name: "something"}
                response.should redirect_to(new_post_path)
                flash[:error].should include("error message")
            end
        end
    end # ends Post #create

end
