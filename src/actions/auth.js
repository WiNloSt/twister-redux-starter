import { AUTH_LOGIN_SUCCESS } from './types'
import config from '../config'


const loginSuccess = (username, name, token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    username,
    name,
    token
  }
})

const { host, port } = config.api
export const login = (username, password) => dispatch => {
  const uri = `http://${host}:${port}/api/TwisterUsers/login`
  fetch(uri, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }

      return res.json()
    })
    .then(({
      username,
      name,
      token
    }) => dispatch(loginSuccess(
      username,
      name,
      token
    )))
    .catch(console.error)
}
