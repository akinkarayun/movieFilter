export interface IMovieGenres {
  genres: string[]
  movies: IMovie[]
}

export interface IMovie {
  id: number
  title: string
  year: string
  runtime: string
  genres: string[]
  director: string
  actors: string
  plot: string
  posterUrl: string
}
