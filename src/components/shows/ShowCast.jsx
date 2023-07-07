import { getImageSource } from "../../utils"

const ShowCast = ({cast}) => {
  return (
    <div>
        <h2>Cast</h2>
        <div>
            {cast?.map(({person, character}, i) => (
                <div key={person?.id || i}>
                    <img src={getImageSource(person?.image?.medium)} />
                    <div>{person?.name} | {character?.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShowCast