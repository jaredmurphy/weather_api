require 'rails_helper'

RSpec.describe City, type: :model do
  #pending "add some examples to (or delete) #{__FILE__}"
  describe City
     it "has a valid factory" do
       FactoryGirl.build(:city).should be_valid
     end
 
     it "is invalid without a name" do 
       FactoryGirl.build(:city, :name => nil).should_not be_valid
     end
 
     it "is invalid without a humidity" do 
       FactoryGirl.build(:city, :humidity => nil).should_not be_valid
     end
 
     it "is invalid without a temp" do
       FactoryGirl.build(:city, :temp => nil).should_not be_valid
     end
 
     it "is invalid without a description" do
       FactoryGirl.build(:city, :description => nil).should_not be_valid
     end
 
     it "is invalid without a wind" do 
       FactoryGirl.build(:city, :description => nil).should_not be_valid
     end
 end
