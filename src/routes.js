import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'

import Home from './pages/home'
import Filme from './pages/Filme'
import Favoritos from './pages/Favoritos'


const Routes = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/filme/:id" component = {Filme}/>
        <Route exact patch ="/favoritos" component={Favoritos}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes