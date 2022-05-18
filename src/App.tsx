import React, { useEffect } from "react"
import "./App.css"
import { MovieCard } from "./components/Movie/MovieCard"
import data from "./data/movies.json"

export interface IMovieProps {
  poster_path: string
  adult?: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

function App() {
  const [activeGenre, setActiveGenre] = React.useState<string>("All")
  const [active, setActive] = React.useState<number>(0)

  return (
    <div className="container">
      <>
        <div className="filterButton">
          {data.genres.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveGenre(item)
                  setActive(index)
                }}
                className={`filterButtonElement ${active === index ? 'active' : ''}`}
              >
                {item}
              </button>
            )
          })}
        </div>


        <MovieCard activeGenre={activeGenre} data={data.movies} />
      </>
    </div>
  )
}

export default App
