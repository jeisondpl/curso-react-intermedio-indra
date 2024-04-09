import { Route, Switch } from 'react-router-dom'
import { Clase1, Clase2, Home } from '../pages'
const Routers = () => {
  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/clase-1' component={Clase1} exact />
      <Route path='/clase-2' component={Clase2} />
    </Switch>
  )
}

export default Routers
