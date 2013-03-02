class SessionsController < ApplicationController
  def new
  #No need for anything -> stupid form
  end

  def create
    user = User.where(:name => params[:username]).first
    if user.present? && user.authenticate(params[:password])
        #loged in!
        session[:user_id] = user.id
        redirect_to root_path
    else
        #failed loged in
        flash[:notice] = 'Incorrect Login, try again.'
        redirect_to login_path
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end