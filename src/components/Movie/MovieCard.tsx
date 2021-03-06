import React from "react"
import { IMovie } from "../../modal/modal"
import { motion } from "framer-motion"

interface IMovieCardProps {
  data: IMovie[]
  activeGenre?: string
}

export const MovieCard: React.FC<IMovieCardProps> = (
  props: IMovieCardProps
) => {
  const [filteredDataMovie, setFilteredValues] = React.useState(
    props.data as IMovie[]
  )

  React.useEffect(() => {
    const filteredData = props.data.filter((item) =>
      item.genres.includes(props.activeGenre ?? "")
    )
    setFilteredValues(filteredData)
  }, [props.activeGenre])

  function addDefaultSrc(ev: any) {
    ev.target.src =
      "https://th.bing.com/th/id/R.6407d0cf92313368ddcaa5d373d2dc9c?rik=Kc9MWqqylvK%2foQ&pid=ImgRaw&r=0"
  }

  return (
    <motion.div
      animate={{ y: 100 }}
      layout
      className={`${filteredDataMovie.length === 0 ? "" : "movies"}`}
    >
      {filteredDataMovie.length === 0 ? (
        <h1>No Movies Listed In That Category</h1>
      ) : (
        filteredDataMovie.map((item, key) => {
          return (
            <motion.div layout key={key}>
              <h2>{item.title}</h2>
              <img onError={addDefaultSrc} src={item.posterUrl} alt="Movie" />
            </motion.div>
          )
        })
      )}
    </motion.div>
  )
}
