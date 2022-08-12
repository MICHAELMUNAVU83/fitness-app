import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
const SingleRoom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
  });
  const detailsContainer = items.map(
    (item) =>
      item.sys.item_id === params.id && (
        <div key={item.sys.item_id}>
          {item.fields.images.map((image) => (
            <img className="detailsimg" src={image.fields.file.url} alt="uil" />
          ))}
          <div className="description-info">
            <div className="description">
              <h2>DESCRIPTION</h2>
              <p>{item.fields.description}</p>
            </div>
            <div className="info">
              <h2>INFO</h2>
              <div>
                <span>PRICE :</span> <span>{item.fields.price}</span>
              </div>
              <div>
                <span>SIZE :</span> <span>{item.fields.size} square ft</span>
              </div>
              {item.fields.capacity === 1 && (
                <div>
                  <p> has {item.fields.capacity} bedroom</p>
                </div>
              )}
              {item.fields.capacity > 1 && (
                <div>
                  <p> has {item.fields.capacity} bedrooms</p>
                </div>
              )}
              {item.fields.breakfast && (
                <div>
                  <p> Free Breakfast is Provided</p>
                </div>
              )}
              {!item.fields.breakfast && (
                <div>
                  <p> No breakfast is provided</p>
                </div>
              )}
              {item.fields.pets && (
                <div>
                  <p> Pets are allowed</p>
                </div>
              )}
              {!item.fields.pets && (
                <div>
                  <p> No Pets are allowed</p>
                </div>
              )}
            </div>
          </div>
          <div className="extras">
            <h2>EXTRAS</h2>
            <ul>
              {item.fields.extras.map((extra) => (
                <li className="mama">
                  {" "}
                  <FcCheckmark /> {extra}
                </li>
              ))}
            </ul>
          </div>

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
       {detailsContainer}
      {comments}
      {lala}
    </div>
  );
};
export default SingleRoom;
