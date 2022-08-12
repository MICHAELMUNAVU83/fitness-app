import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom";

const SingleRoom = () => {
  const items = useContext(RoomContext);
  const params = useParams();
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [user, setUser] = useState("");
  const postComment = async (e) => {
    e.preventDefault();
    const fetchcomment = await fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UtwfXzvT3J0J8vpy7HPo/comments",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item_id: params.id,
          username: user,
          comment: comment,
        }),
      }
    );

    const fetchedComment = await fetchcomment.text();
    console.log(fetchedComment);
    getComment();
  };
  const getComment = async () => {
    const getcomment = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UtwfXzvT3J0J8vpy7HPo/comments/?item_id=${params.id}`
    );

    const gotComment = await getcomment.json();
    setAllComments(gotComment);
  };

  useEffect(() => {
    getComment();
  }, []);
  const more = items.map(
    (item) =>
      item.sys.item_id === params.id && (
        <div key={item.sys.item_id}>
          <p>{item.fields.name}</p>
          <Link to="/rooms"> see rooms </Link>
        </div>
      )
  );
  const comments = (
    <div key="1">
      <input
        type="text"
        placeholder="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="user"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <button type="button" onClick={postComment}>
        post
      </button>
    </div>
  );

  const lala =
    allComments.length > 0 &&
    allComments.map((each) => (
      <div id={params.id}>
        <p>{each.comment}</p>
      </div>
    ));

  return (
    <div>
      {comments}
      {more}
      {lala}
    </div>
  );
};
export default SingleRoom;
