import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendItem = ({ friend }) => {
  return (
    <div className={css.item}>
      <div className={friend.isOnline ? css.green : css.red}></div>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{friend.name} </p>
    </div>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendItem;
