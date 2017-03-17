import React, { PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends React.Component {
  static propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.object),
    fetchTweets: PropTypes.func,
    pageUsername: PropTypes.string
  }

  static defaultProps = {
    tweets: []
  }

  componentDidMount() {
    const pageUsername = this.props.pageUsername || 'zkancs'

    this.props.fetchTweets(pageUsername)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pageUsername === this.props.pageUsername) return

    const pageUsername = nextProps.pageUsername || 'zkancs'

    this.props.fetchTweets(pageUsername)
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
