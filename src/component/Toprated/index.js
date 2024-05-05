import {useState, useEffect} from 'react'

import Navbar from '../Navbar'
import Card from '../Card'
import './index.css'

const api = '29c536945e5641450e5349580790850e'

const Toprated = () => {
  const [resultData, setResult] = useState('')
  const [start, setStart] = useState(false)

  const fetchPopular = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api}&language=en-US&page=1`,
    )
    const jsonResponse = await response.json()
    setResult(jsonResponse.results)
    setStart(true)
  }

  useEffect(() => {
    fetchPopular()
  }, [])

  console.log(resultData)

  return (
    <>
      <Navbar />
      {start ? (
        <ul className="popular-bg">
          {resultData.map(each => (
            <Card data={each} key={each.id} />
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default Toprated
