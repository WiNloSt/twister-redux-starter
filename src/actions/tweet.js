import { FETCH_TWEETS_SUCCESS } from './types'
import config from '../config'

const { host, port } = config.api
const baseURL = `http://${host}:${port}`

export const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: {
    tweets
  }
})

export const fetchTweets = username => dispatch => {
  const filter = {
    where: {
      username
    }
  }
  fetch(`${baseURL}/api/Tweets?filter=${JSON.stringify(filter)}`)
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText)
      }
      return res.json()
    })
    .then(tweets => dispatch(fetchTweetsSuccess(tweets)))
    .catch(console.error)
}
