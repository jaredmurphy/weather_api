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
        it 'creates city' do 
            city_params = FactoryGirl.attributes_for(:city)
            expect { post :create, :city => city_params }.to change(City,
            :count).by(1)
        end
        context 'with valid attributes' do 
            it 'creates city' do 
                post :create, city: attributes_for(:city)
                expect(City.count).to eq(1)
            end
        end
        
        context 'with invalid attributes' do 
            it 'does not create the city' do 
                post :create, city: attributes_for(:city, name: nil)
                expect(Vehicle.count).to eq(0)
            end
        end
    end # ends Post #create

end
