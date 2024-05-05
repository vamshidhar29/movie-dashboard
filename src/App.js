import {Switch, Route} from 'react-router-dom'

import Popular from './component/Popular'
import Toprated from './component/Toprated'
import Upcoming from './component/Upcoming'
import './App.css'

// write your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Popular} />
    <Route exact path="/top-rated" component={Toprated} />
    <Route exact path="/upcoming" component={Upcoming} />
  </Switch>
)

export default App
