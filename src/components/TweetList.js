import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  static propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.object),
    fetchTweets: PropTypes.func
  }

  static defaultProps = {
    tweets: []
  }

  componentDidMount() {
    const mockUsername = 'zkancs'

    this.props.fetchTweets(mockUsername)
  }

  render() {
    return (
      <div className='tweet-list'>
        { this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />) }
      </div>
    )
  }
}

export default TweetList
