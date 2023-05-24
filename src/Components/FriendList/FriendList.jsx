import PropTypes from 'prop-types';
import FriendItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2>FriendList</h2>
      <ul className="friend-list">
        {friends.map(friend => {
          return (
            <li key={friend.id}>
              <FriendItem friend={friend} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
