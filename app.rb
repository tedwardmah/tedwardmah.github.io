require 'bundler'
Bundler.require(:default)

set :database, {adapter: "postgresql", database: "tedward"}

get '/' do 
	erb :index
end

# get '/*' do 
#   erb :index
# end