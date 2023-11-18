import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddComments } from "../Redux/action";
import { SaveReels } from "../Redux/actionType";

const Post = ({ name, post, comments, index }) => {
  let [open, setOpen] = useState(false);
  let [text, setText] = useState("");
  let [saveBtn, setSaveBtn] = useState(false);
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

  let handleSave = () => {
    let obj = {
      name,
      post,
      comments,
    };

    if (!isAuth) navigate("/authentication");
    else {
      setSaveBtn(true);
      dispatch({ type: SaveReels, payload: obj });
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
              </div>
            </div>

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
              <button onClick={handleSave} disabled={saveBtn}>
                {saveBtn ? "Saved Successfully" : "Save this!"}
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
    transition: box-shadow ease-in-out 0.4s;

    &:hover {
      box-shadow: 2px 2px 30px white;
    }
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
        margin-right: 1rem;
      }

      .firstChild {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
      }

      .name {
        padding: 10px 1rem;
      }

      .comments {
        padding: 2px;
        div {
          margin-bottom: 10px;
        }
        .c {
          background-color: #635f5f8e;
          padding: 4px;
          width: 100%;
        }
      }

      .textarea {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        textarea {
          width: 100%;
          padding: 10px;
        }
        button {
          cursor: pointer;
          margin-top: 1rem;
          border: 0;
          padding: 10px;
          color: white;
          background-image: linear-gradient(
            45deg,
            #405de6,
            #5851db,
            #833ab4,
            #c13584,
            #e1306c,
            #fd1d1d,
            #f56040,
            #f77737,
            #fcaf45,
            #ffdc80
          );
        }
      }

      .lastRow {
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
        button {
          padding: 5px 20px;
          border: 0;
          background-color: grey;
          color: white;
          cursor: pointer;
          transition: ease-in-out 0.1s;
          &:hover {
            background-image: linear-gradient(
              45deg,
              #405de6,
              #5851db,
              #833ab4,
              #c13584,
              #e1306c,
              #fd1d1d,
              #f56040,
              #f77737,
              #fcaf45,
              #ffdc80
            );
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .ChildModal {
      width: 90% !important;
    }
    .firstChild {
      flex-direction: column;
    }
    .name {
      margin-top: 1rem;
      text-transform: uppercase;
    }
  }
`;
