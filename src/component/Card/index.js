import './index.css'

const Card = props => {
  const {data} = props
  const imageSrc = `https://image.tmdb.org/t/p/w500${data.poster_path}`

  return (
    <li className="li-card-bg">
      <img className="imgs-card" src={imageSrc} alt={data.title} />
      <div className="card-data-container">
        <h1 className="card-head">{data.title}</h1>
        <p className="card-rating">{data.vote_average}</p>
        <button className="card-viewDetails-btn" type="button">
          View Details
        </button>
      </div>
    </li>
  )
}

export default Card
