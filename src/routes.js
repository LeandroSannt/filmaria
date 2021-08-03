import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import Filme from './pages/Filme'
import Header from './components/Header'


const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/filme/:id" component = {Filme}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes