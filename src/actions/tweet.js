import { FETCH_TWEETS_SUCCESS } from './types'

export const fetchTweetsSuccess = tweets => ({
  type: FETCH_TWEETS_SUCCESS,
  payload: {
    tweets
  }
})
