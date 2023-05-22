import PropTypes from 'prop-types';

import css from './User.module.css';

const User = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <h2>Profile</h2>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li>
          <span className={css.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      stats: PropTypes.object,
    })
  ),
};

export default User;
