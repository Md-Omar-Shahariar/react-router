import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../SingleFrind/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((data) => setFriends(data.data));
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>Hello Friends</h2>
      <p>Kichu Tk Dhar Dis.. {friends.length}</p>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
