import React, { useContext, useState, useEffect } from "react";
import { RoomContext } from "../context";
import { Link, useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { AiTwotoneStar, AiOutlineComment } from "react-icons/ai";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {
  MdPriceCheck,
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdOutlineCancel,
  MdOutlineFreeBreakfast,
} from "react-icons/md";
import { IoMdResize } from "react-icons/io";
const SingleRoom = () => {
  const items = useContext(RoomContext);
  const params = useParams();
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [user, setUser] = useState("");
  const postComment = async (e) => {
    e.preventDefault();
    const fetchcomment = await fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/paRddRGESsmKHBcX7cmk/comments",
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
    setUser(" ");
    setComment(" ");
    getComment();
  };
  const getComment = async () => {
    const getcomment = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/paRddRGESsmKHBcX7cmk/comments/?item_id=${params.id}`
    );

    const gotComment = await getcomment.json();
    setAllComments(gotComment);
  };
  // useEffect(()=>{
  //   getComment()
  // })
  useEffect(() => {
    if (allComments.length > 0) {
      getComment();
    }
  }, [params.id]);
  const detailsBanner = items.map(
    (item) =>
      item.sys.item_id === params.id && (
        <div className="details-banner">
          <img
            className="details-banner-img"
            src={item.fields.images[1].fields.file.url}
            alt="details banner"
          />
          <div className="details-banner-inner">
            <p>{item.fields.name.toUpperCase()}</p>
            <p className="details-line"></p>
          </div>
          <div className="backdetails">
            <Link to="/rooms">
              {" "}
              <IoArrowBackCircleSharp />
            </Link>
          </div>
        </div>
      )
  );
  const detailsContainer = items.map(
    (item) =>
      item.sys.item_id === params.id && (
        <div key={item.sys.item_id}>
          <div className="extra-images-div">
            {item.fields.images.map((image) => (
              <img
                className="extra-image"
                src={image.fields.file.url}
                alt="uil"
              />
            ))}
          </div>

          <div className="description-info">
            <div className="description">
              <h2>DESCRIPTION</h2>
              <p>{item.fields.description}</p>
            </div>
            <div className="info">
              <h2>INFO</h2>
              <div>
                <span>
                  {" "}
                  <MdPriceCheck /> PRICE :
                </span>{" "}
                <span>{item.fields.price}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <IoMdResize /> SIZE :
                </span>{" "}
                <span>{item.fields.size} square ft</span>
              </div>
              {item.fields.capacity === 1 && (
                <div>
                  <span>
                    <MdOutlineBedroomChild />{" "}
                  </span>{" "}
                  <span> Has {item.fields.capacity} bedroom</span>
                </div>
              )}
              {item.fields.capacity > 1 && (
                <div>
                  <span>
                    <MdOutlineBedroomParent />{" "}
                  </span>{" "}
                  <span> Has {item.fields.capacity} bedrooms</span>
                </div>
              )}
              {item.fields.breakfast && (
                <div>
                  <span>
                    <TiTick /> <MdOutlineFreeBreakfast />
                  </span>{" "}
                  <span> Free Breakfast is Provided</span>
                </div>
              )}
              {!item.fields.breakfast && (
                <div>
                  <span>
                    {" "}
                    <MdOutlineCancel /> <MdOutlineFreeBreakfast />{" "}
                  </span>{" "}
                  <span> No breakfast is provided</span>
                </div>
              )}
              {item.fields.pets && (
                <div>
                  <span>
                    {" "}
                    <TiTick /> <GiSittingDog />{" "}
                  </span>{" "}
                  <span> Pets are allowed</span>
                </div>
              )}
              {!item.fields.pets && (
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
              {item.fields.extras.map((extra) => (
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
        <input
          type="text"
          placeholder="Comment...."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="User...."
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </div>

      <button type="button" className="postComment" onClick={postComment}>
        POST COMMENT
      </button>
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
    // const handleCli = (ma)=>{
    //  let mama= ma.fields.saved 
    //  mama=!ma.fields.saved
    //   return mama;
    // }
  const buttons = items.map(
    (item) =>
     ( !item.fields.saved &&
      item.sys.item_id === params.id && <button onClick={()=>{
       let clicked = item.fields.saved
       clicked = !item.fields.saved
       const ma = {...item, saved :clicked}
       console.log(ma)
      }}>SAVE</button>)
     
  );

  return (
    <div>
      {detailsBanner}
      {detailsContainer}
      {buttons}
      {comments}
      <div className="all-comments-div">{lala}</div>
    </div>
  );
};
export default SingleRoom;
