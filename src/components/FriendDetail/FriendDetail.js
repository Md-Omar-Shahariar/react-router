import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const param = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${param.friendId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  return (
    <div>
      <h2>This is detail {param.friendId}</h2>
      <h3>Name: {friend.name}</h3>
    </div>
  );
};

export default FriendDetail;
