import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={props => (
    token ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

PrivateRoute.propTypes = {
  component: React.PropTypes.any.isRequired,
  location: React.PropTypes.object.isRequired,
  token: React.PropTypes.string
}

PrivateRoute.defaultProps = {
  token: ''
}

const mapState = state => ({
  token: state.auth.token
})

export default connect(mapState)(PrivateRoute)
