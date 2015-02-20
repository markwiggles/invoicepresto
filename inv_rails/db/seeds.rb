# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Biller.create([{name: "Biller1", email: "biller1@live.com", phone: "0499 999999"},
               {name: "Biller2", email: "biller2@live.com", phone: "0499 999999"}])


Debtor.create([{name: "Debtor1", email: "debtor1@live.com", phone: "0499 999999"},
               {name: "Debtor2", email: "debtor2@live.com", phone: "0499 999999"}])

Item.create([{name: "Item1", description: "item one", price: "4.50"},
	{name: "Item2", description: "item two", price: "4.50"}])

Tax.create([{name: "Tax1", description: "GST", percentage: "10"},
	{name: "Tax2", description: "Duty", percentage: "5"}])

Freight.create([{name: 'Freight1', description: "international", price: "30"},
	{name: 'Freight2', description: "local", price: "10"}])

BankDetail.create([{name: "my Paypal account", account_number: "9999 9999"},
	{name: "my Citibank account", account_number: "9999 9999"}])

InvoiceNumber.create([{nextnum_int: "1", nextnum_str: "todays date"},
	{nextnum_int: "100", nextnum_str: "my name"}])
