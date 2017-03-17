import { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT } from '../actions/types'

const initialState = {
  name: '',
  username: '',
  token: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      const { name, username, token } = action.payload
      return {
        name,
        username,
        token
      }
    }
    case AUTH_LOGOUT: {
      return initialState
    }
    default: return state
  }
}

export default authReducer
