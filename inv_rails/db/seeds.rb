# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

billers = Biller.create([{name: "Mark", email: "markwigg@live.com", phone: "0433044170"},
                         {name: "Fred", email: "freddie@live.com", phone: "049999999"}])


5.times do |i|
  Biller.create(name: "name_#{i}",
                email: "email@email_address_#{i}.com",
                phone: "0404040404#{i}")
end
