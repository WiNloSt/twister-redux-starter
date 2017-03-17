import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import MainLayout from '../layouts/MainLayout'
import BodyContainer from './BodyContainer'
import LoginForm from '../containers/LoginForm'
import SignUpForm from '../containers/SignUpForm'
import PrivateRoute from '../containers/PrivateRoute'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <MainLayout>
      <Switch>
        <PrivateRoute exact path='/' component={BodyContainer} />
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignUpForm} />
        <PrivateRoute path='/:ownerUsername' component={BodyContainer} />
      </Switch>
    </MainLayout>
  </ConnectedRouter>
)

App.propTypes = {
  history: React.PropTypes.object
}

export default App
