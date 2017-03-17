import { connect } from 'react-redux'
import { matchPath } from 'react-router-dom'

import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions'

const mapState = state => {
  const match = matchPath(state.router.location.pathname, {
    path: '/:pageUsername'
  })

  return {
    tweets: state.tweets,
    pageUsername: match ? match.params.pageUsername : null
  }
}

const mapDispatch = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username))
})

export default connect(mapState, mapDispatch)(TweetList)
