# == Schema Information
#
# Table name: games
#
#  id         :integer          not null, primary key
#  result     :boolean
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game <ActiveRecord::Base
  attr_accessible :result,:user_id
  belongs_to :user
end
