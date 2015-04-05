require 'spec_helper'

describe Item do

  it 'is valid' do

    item1 = Item.new(name: 'fred')
    item2 = Item.new(name: 'joe')
    item3 = Item.new

    item1.should be_valid

    item1.save
    expect {item2.save}.to change {Item.count}.by(1)

    expect {item3.save!}.to raise_error(
      ActiveRecord::RecordInvalid
    )

    puts Item.count

    expect Item.count.should eq 2

    puts "Name: #{item2.name}"

  end



end
