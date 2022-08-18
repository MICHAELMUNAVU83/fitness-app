import React, { useState, useContext, useEffect } from "react";
import { RoomContext } from "../context";
import items from "../data";
import {  useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { MdSaveAlt } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { AiTwotoneStar, AiOutlineComment } from "react-icons/ai";
import {
  MdPriceCheck,
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdOutlineCancel,
} from "react-icons/md";
import { IoMdResize } from "react-icons/io";
const SingleRoom = () => {
  const { addCart } = useContext(RoomContext);
  const params = useParams();
  const [savedClass, setSavedClass] = useState("save");
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [user, setUser] = useState("");
  const postComment = async (e) => {
    e.preventDefault();
    const fetchcomment = await fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UWjx9gCLF7qVtXnxcdP1/comments",
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
    console.log(fetchcomment)
    setUser(" ");
    setComment(" ");
    getComment();
  };
  const getComment = async () => {
    const getcomment = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UWjx9gCLF7qVtXnxcdP1/comments/?item_id=${params.id}`
    );
    const gotComment = await getcomment.json();
    setAllComments(gotComment);
  };
  useEffect(() => {
    
      getComment();

    
  });

  const detailsBanner = items.map(
    (item) =>
      item.item_id === params.id && (
        <div key={item.item_id} className="details-banner">
          <img
            className="details-banner-img"
            src={item.images[3]}
            key={item.item_id}
            alt="details banner"
          />
          <div className="details-banner-inner">
            <p>{item.name.toUpperCase()}</p>
            <p className="details-line"></p>
          </div>
        </div>
      )
  );
  const detailsContainer = items.map(
    (item) =>
      item.item_id === params.id && (
        <div key={item.item_id}>
          <div className="extra-images-div">
            {item.images.map((image) => (
              <img className="extra-image" src={image} alt="uil" />
            ))}
          </div>

          <div className="description-info">
            <div className="description">
              <h2>DESCRIPTION</h2>
              <p>{item.description}</p>
            </div>
            <div className="info">
              <h2>INFO</h2>
              <div>
                <span>
                  {" "}
                  <MdPriceCheck /> PRICE :
                </span>{" "}
                <span>{item.price}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <IoMdResize /> SIZE :
                </span>{" "}
                <span>{item.size} square ft</span>
              </div>
              {item.capacity === 1 && (
                <div>
                  <span>
                    <MdOutlineBedroomChild />{" "}
                  </span>{" "}
                  <span> Has {item.capacity} bedroom</span>
                </div>
              )}
              {item.capacity > 1 && (
                <div>
                  <span>
                    <MdOutlineBedroomParent />{" "}
                  </span>{" "}
                  <span> Has {item.capacity} bedrooms</span>
                </div>
              )}
              {item.pets && (
                <div>
                  <span>
                    {" "}
                    <TiTick /> <GiSittingDog />{" "}
                  </span>{" "}
                  <span> Pets are allowed</span>
                </div>
              )}
              {!item.pets && (
                <div>
                  <span>
                    {" "}
                    <MdOutlineCancel /> <GiSittingDog />{" "}
                  </span>{" "}
                  <span> No Pets are allowed</span>
                </div>
              )}
            </div>
          </div>
          <div className="extras">
            <h2>EXTRAS</h2>
            <ul>
              {item.extras.map((extra) => (
                <li className="mama">
                  {" "}
                  <FcCheckmark /> {extra}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
  );
  const comments = (
    <div className="inputCommentsdiv" key="1">
      <div className="addreview">
        <h2>
          {" "}
          <span>
            {" "}
            <AiTwotoneStar style={{ color: "gold" }} />
          </span>{" "}
          <span>ADD A REVIEW </span>{" "}
        </h2>
      </div>
      <div className="actualinputs">
        <div>
          <span>Comment:</span>
          <input
            type="text"
            placeholder="Comment...."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <div>
          <span>User:</span>
          <input
            type="text"
            placeholder="User...."
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="post-comment-div">
        <button type="button" className="postComment" onClick={postComment}>
          POST REVIEW
        </button>
      </div>
    </div>
  );
 
  const lala =
    allComments.length > 0 &&
    allComments.map((each, index) => (
      <div className="each-comment" key={index}>
        <div>
          <span className="each-comment-icon">
            <FaUserCircle />{" "}
          </span>{" "}
          <span className="each-comment-user">{each.username}</span>
        </div>
        <div>
          <span className="each-comment-icon">
            <AiOutlineComment />{" "}
          </span>{" "}
          <span className="each-comment-comment">{each.comment}</span>
        </div>
      </div>
    ));
  const saveHouse = items.map((item) => {
    if (item.item_id === params.id && savedClass === "save"){
      return (
        <div key={item.item_id} className="save-house-btn">
          <button
            type="button"
            onClick={() => {
              addCart(item);
              setSavedClass("saved");
            }}
          >
            {" "}
            <span>SAVE HOUSE</span>{" "}
            <span className="save-icon">
              {" "}
              <MdSaveAlt />{" "}
            </span>
          </button>
        </div>
      );

    }
   else if (item.item_id===params.id){
     return(
      
      <div key={item.item_id} className="save-house-btn">
          <button
            type="button"
           
          >
            {" "}
            <span>SAVED THIS HOUSE</span>{" "}
            <span className="save-icon">
              {" "}
              <TiTick />{" "}
            </span>
          </button>
        </div>

     )
     
   }
     
  });

  return (
    <div>
      {detailsBanner}
      {detailsContainer}
      {saveHouse}
      {comments}
      <div className="comment-header">REVIEWS</div>
      <div className="all-comments-div">{lala}</div>
    </div>
  );
};
export default SingleRoom;
