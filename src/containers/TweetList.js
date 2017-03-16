import { connect } from 'react-redux'

import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions'

const mapState = state => ({
  tweets: state.tweets
})

const mapDispatch = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username))
})

export default connect(mapState, mapDispatch)(TweetList)
