import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => (
  <div className="nav-bg">
    <h1 className="navbar-head">movieDB</h1>

    <div className="earch-bg">
      <input type="search" className="input" />
      <button type="button" className="search-btn">
        Search
      </button>
    </div>

    <div className="link-elements-bg">
      <Link to="/" className="link-elements">
        <p>Popular</p>
      </Link>
      <Link to="/top-rated" className="link-elements">
        <p>TopRated</p>
      </Link>
      <Link to="/upcoming" className="link-elements">
        <p>Upcoming</p>
      </Link>
    </div>
  </div>
)

export default Navbar
