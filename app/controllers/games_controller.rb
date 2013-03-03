class GamesController <ApplicationController
def index
 #Show Game Page
end

def record
    if Game.create(:result=>params[:winloss],:user_id=>params[:id])

    else
      binding.pry
    end
    render :json => "Nadda"
end

end
