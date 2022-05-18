import React from 'react'
import { IMovie } from '../../modal/modal';
import motion from 'motion';

interface IMovieCardProps {
  data: IMovie[];
  activeGenre?: string;

}

export const MovieCard: React.FC<IMovieCardProps> = (props: IMovieCardProps) => {
  // const filteredData = props.data.includes(() => {
  //   return item.genres.includes(props.activeGenre)
  // })
  const [filteredDataMovie, setFilteredValues] = React.useState(props.data as IMovie[])

  React.useEffect(() => {
    const filteredData = props.data.filter(item => item.genres.includes(props.activeGenre ?? ""))
    setFilteredValues(filteredData)
  }, [props.activeGenre])


  function addDefaultSrc(ev: any) {
    ev.target.src = 'https://th.bing.com/th/id/R.6407d0cf92313368ddcaa5d373d2dc9c?rik=Kc9MWqqylvK%2foQ&pid=ImgRaw&r=0'
  }

  return (

    <div className="movies">
      {filteredDataMovie.map((item, key) => {
        return (
          <div key={key}>
            <h2>{item.title}</h2>
            <img onError={addDefaultSrc} src={item.posterUrl} alt="Movie" />
          </div>
        )
      })
      }

    </div>
  );
}