require 'spec_helper'

# require 'demo'

# require '../../app/controllers/api/items_controller'


describe Demo do

  context Demo do
    its(:name) {should eq 'who'}
  end

  demo = Demo.new(name: 'fred')

  context 'creating objects' do

  	puts "NAME: #{demo.name}"

    it 'check name' do

      demo.name.should eq 'fred'
    end

    

  end


end
