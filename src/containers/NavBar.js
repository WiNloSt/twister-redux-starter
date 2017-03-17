import { connect } from 'react-redux'

import NavBar from '../components/NavBar'

const mapState = state => ({
  isLoggedIn: !!state.auth.token.length
})

export default connect(mapState)(NavBar)
