import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddComments } from "../Redux/action";

const Post = ({ name, post, comments, index }) => {
  let [open, setOpen] = useState(false);
  let [text, setText] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { isAuth, data } = useSelector((store) => {
    return {
      isAuth: store.SignINReducer.isAuth,
      data: store.SignupReducer.data,
    };
  }, shallowEqual);

  let handleClick = () => {
    setOpen(true);
  };

  let handleComment = () => {
    if (!isAuth) {
      navigate("/authentication");
    } else {
      let obj = {
        name: data.name,
        comment: text,
      };

      dispatch(AddComments(index, obj));
      setOpen(false);
    }
  };

  let handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: post,
        });
      } catch (error) {
        console.error("Error sharing:", error);

        alert(`Error sharing: ${error.message}`);
      }
    } else {
      alert("Your device does not support the Share API");
    }
  };

  return (
    <DIV>
      <WRAPPER>
        <img src={post} alt={name} loading="lazy" onClick={handleClick} />
      </WRAPPER>

      {open && (
        <div className="modal">
          <div className="ChildModal">
            <div className="firstChild">
              <img src={post} alt="" />
              <div>
                <p className="name">{name}</p>
                <div className="comments">
                  {comments.map((ele, i) => {
                    return (
                      <div key={i}>
                        <p>{ele.name}</p>
                        <p className="c">{ele.comment}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="textarea">
              <textarea
                placeholder="comment..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button onClick={handleComment}>Comment</button>
            </div>

            <div className="lastRow">
              <button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </button>
              <button onClick={handleShare}>Share</button>
            </div>
          </div>
        </div>
      )}
    </DIV>
  );
};

export default Post;

let WRAPPER = styled.div`
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    display: block;
    margin: auto;
    border-radius: 7px;
    cursor: pointer;
  }
`;

let DIV = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    background-color: #605a5a98;

    .ChildModal {
      background-color: white;
      width: 50%;
      margin: auto;
      position: relative;
      top: 50%;
      transform: translate(0%, -50%);
      padding: 1rem;

      img {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      .firstChild {
        display: flex;
        justify-content: space-around;
      }

      .name {
        background: #1877f2;
        color: white;
        text-align: center;
        margin-bottom: 10px;
      }

      .comments {
        width: 10rem;
        height: 8rem;
        overflow: hidden;
        padding: 2px;
        div {
          margin-bottom: 10px;
        }
        .c {
          background-color: #635f5f8e;
          padding: 4px;
        }
      }

      .textarea {
        margin-top: 1rem;
        display: flex;
        margin-bottom: 1rem;
        textarea {
          width: 22rem;
          padding: 10px;
        }
        button {
          padding: 0px 10px;
          margin-left: 10px;
          cursor: pointer;
        }
      }

      .lastRow {
        display: flex;
        justify-content: space-between;
        button {
          padding: 5px 20px;
          border: 0;
          background-color: grey;
          color: white;
        }
      }
    }
  }
`;
