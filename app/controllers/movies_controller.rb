class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render json: @movies
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  def create
    @movie = Movie.create(movie_params)
    if @movie.valid?
      render json: Movie.all
    else
      render json: @movie.errors, status: 422
    end
  end

  def update                         
    @movie = Movie.find(params[:id])
    @movie.update(movie_params)
      render json: @movie
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :thumbs_up, :thumbs_down, :movie_id )
  end
end
