import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import Tag from 'Components/Tag';

class DiscussionBox extends Component {
  render() {
    const {
      voteCount,
      userName,
      url,
      provider,
      discussionTitle,
      time,
      opinionCount,
      tags,
      link,
      userProfile,
    } = this.props;

    const postTime = Moment(time);
    const timeDisplay = postTime.from(Moment());

    return (
      <div className={styles.container}>
        <div className={classnames(styles.title, userProfile && styles.titleBottomMargin)}><Link to={link}>{discussionTitle}</Link></div>

        { !userProfile && <div className={styles.posterInfo}>
          <Link to={`/user/${encodeURIComponent(userName)}`} className={styles.name}>{userName}</Link>
          <a target={ url ? '_blank' : '_self' } href={ url || '#!' } className={styles.gitHandler}>
            - <i className={classnames(`fa fa-${provider}`, styles.gitIcon)}></i> {userName}
          </a>
        </div> }

        <div className={styles.boxFooter}>
          <div className={styles.tagsArea}>
            { tags.map((tag) => <Tag key={tag} name={tag} />) }
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{timeDisplay}</span>
            <span className={styles.info}>{voteCount} favorites</span>
            <span className={styles.info}>{opinionCount} opinions</span>
          </div>
        </div>
      </div>
    );
  }
}

DiscussionBox.defaultProps = {
  url: null,
  discussionId: 1,
  voteCount: 20,
  userName: 'Hello World',
  discussionTitle: 'This is a default post title',
  time: Moment(),
  opinionCount: 12,
  tags: ['react', 'redux', 'nodejs'],
  link: '',
  userProfile: false,
};

DiscussionBox.propTypes = {
  discussionId: React.PropTypes.number,
  voteCount: React.PropTypes.number,
  userName: React.PropTypes.string,
  url: React.PropTypes.any,
  discussionTitle: React.PropTypes.string,
  time: React.PropTypes.any,
  opinionCount: React.PropTypes.number,
  tags: React.PropTypes.array,
  link: React.PropTypes.string,
  userProfile: React.PropTypes.bool,
};

export default DiscussionBox;
