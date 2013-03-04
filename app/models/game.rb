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

  def topn(n)
    ntable = []
    wtable =[]
    nhn = []
    nhw = []
     vtable = []
    User.all.each do user
        ntable << user.name
        wtable << user.winpercent
    end
    binding.pry
    begin
      nhn =  ntable.slice(wtable.index(wtable.max))
      nhw = wtable.slice(wtable.index(wtable.max))
      vtable << [nhn,nhw]
    end while(vtable.length >=User.all.length)

    return vtable.slice(0,n)
  end


end
