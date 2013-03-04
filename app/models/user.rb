# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  image           :string(255)
#  password_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
    attr_accessible :image, :name,:password, :password_confirmation
    has_many :games
    validates :name ,:uniqueness => true
    has_secure_password

  def winpercent
    games = Game.all
    t = 0
    w = 0
    games.each do |game|
      if game.user_id == self.id
        t +=1
        w += 1 if game.result == true
      end
    end
    return w.to_f / t.to_f
  end



end
