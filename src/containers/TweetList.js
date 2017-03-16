import { connect } from 'react-redux'

import TweetList from '../components/TweetList'
import { fetchTweetsSuccess } from '../actions'

const mapState = state => ({
  tweets: state.tweets
})

const mapDispatch = dispatch => ({
  fetchTweetsSuccess: tweets => dispatch(fetchTweetsSuccess(tweets))
})

export default connect(mapState, mapDispatch)(TweetList)
