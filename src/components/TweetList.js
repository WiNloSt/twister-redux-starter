import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  static propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.object),
    fetchTweetsSuccess: PropTypes.func
  }

  static defaultProps = {
    tweets: []
  }

  componentDidMount() {
    const mockTweets = [
      { id: 1, name: 'John Doe', username: 'jd', tweetText: `Hello it's me`, timestamp: 1234 },
      { id: 2, name: 'StopFish MoonOTea', username: 'PC', tweetText: 'rou ja tum tarm sun yar', timestamp: 5678 }
    ]

    this.props.fetchTweetsSuccess(mockTweets)
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
