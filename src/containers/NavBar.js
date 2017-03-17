import { connect } from 'react-redux'

import NavBar from '../components/NavBar'
import { logout } from '../actions'

const mapState = state => ({
  isLoggedIn: !!state.auth.token.length
})

const mapDispatch = {
  logout
}

export default connect(mapState, mapDispatch)(NavBar)
