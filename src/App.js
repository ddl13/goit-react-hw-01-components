import "./App.css";

// data
import user from "./data/user.json";
import friendsData from "./data/friends.json";
import transactionsData from "./data/transactions.json";
import data from "./data/data.json";

// components
import User from "./Components/User/User";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionsHistory from "./Components/TransactionsHistory/TransactionsHistory";

function App() {
  return (
    <>
      <User
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      ></User>
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friendsData} />
      <TransactionsHistory items={transactionsData} />
    </>
  );
}

export default App;
