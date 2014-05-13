require 'sinatra'

class RockPaperScissorsLizardSpock < Sinatra::Base

	get '/' do 
		erb :index		
	end

end