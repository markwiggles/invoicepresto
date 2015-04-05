require 'spec_helper'

# require 'demo'

# require '../../app/controllers/api/items_controller'


describe Demo do

  it "test" do

  	demo = Demo.new(name: 'fred')

  	demo.name.should_not eq 'fred'

  	puts "NAME: #{demo.name}"

  end




end
