module ApplicationHelper
    def is_auth
      !@auth.nil?
    end
    def winnersboard
      games = Game.all();


    end



end
