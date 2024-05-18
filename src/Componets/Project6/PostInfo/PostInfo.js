import React, { useContext, useEffect, useRef, useState } from "react";
import "./PostInfo.css";
import { useClickAway } from "react-use";
import { Modal } from "@mui/material";
import { SocialPostContext } from "../../../ContextApi/P6Context/socialpostcontext";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { EmojiEmotions, Send } from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import { FaPercentage } from "react-icons/fa";
export default function PostInfo() {
  const ref = useRef(null);
  useClickAway(ref, () => {
    setemojiview(false);
  });
  const itemC = useContext(SocialPostContext);
  const [commentvalue, setcommentvalue] = useState("");
  const [emojiview, setemojiview] = useState(false);
  const [addlike, setaddlike] = useState([]);
  const handleEmojiClick = (emoji) => {
    setcommentvalue((prevcomment) => prevcomment + emoji.emoji);
  };
  const addcommenthandler = (e) => {
    e.preventDefault();
    const newComment = {
      username: "rasoulghasemi",
      text: commentvalue,
      id: 3,
      userid: 23,
      img: "https://www.tarafdari.com/sites/default/files/styles/avatar/ts2/pictures/picture-258887-1563913842.jpg?itok=Lc3zziwI",
    };

    const updatedComments = [newComment, ...itemC.itempost.comment];

    itemC.setitempost({ ...itemC.itempost, comment: updatedComments });

    setcommentvalue("");
  };

  const savehandler = () => {
    itemC.setsavelist((prev) => [...prev, itemC.itempost]);
  };
  const likehandler = () => {
    setaddlike((prev) => [...prev, itemC.itempost]);
  };
  const [issaved, setissaved] = useState(false);
  const [isliked, setisliked] = useState(false);
  useEffect(() => {
    const findsave = itemC.savelist.find((item) => item == itemC.itempost);
    if (findsave) {
      setissaved(true);
    } else {
      setissaved(false);
    }
  }, [itemC.savelist, itemC.itempost]);

  useEffect(() => {
    const findlike = addlike.find((item) => item == itemC.itempost);
    if (findlike) {
      setisliked(true);
    } else {
      setisliked(false);
    }
  }, [addlike, itemC.itempost]);
  const deletesaveitem = () => {
    const filtersave = itemC.savelist.filter((item) => item !== itemC.itempost);
    itemC.setsavelist(filtersave);
  };
  const removeLikeHandler = () => {
    const filteredLikes = addlike.filter((item) => item !== itemC.itempost);
    setaddlike(filteredLikes);
    setisliked(false);
  };
  return (
    <Modal
      className="postcontainer"
      open={itemC.open}
      onClose={() => itemC.setOpen(false)}
    >
      <div className="postfather">
        <div className="rightpostp6 imgdnone">
          <img src={itemC.itempost.img} alt="" />
        </div>
        <div
          className={itemC.darkmode ? "leftpostp6 darkmode111" : "leftpostp6"}
        >
          <div className="sec1postp6">
            <div className="rightsec1postp6">
              <img
                src="https://www.tarafdari.com/sites/default/files/styles/avatar/ts2/pictures/picture-258887-1563913842.jpg?itok=Lc3zziwI"
                alt=""
              />
              <Link onClick={() => itemC.setOpen(false)} to={"../Project6"}>
                rasoulghasemi
              </Link>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <IoIosCloseCircleOutline
                onClick={() => {
                  itemC.setOpen(false);
                }}
                style={{
                  fontSize: "30px",
                  color: "#0095F6",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="rightpostp6 dactmob">
            <img src={itemC.itempost.img} alt="" />
          </div>
          <div
            style={{
              direction: "rtl",
              padding: "15px",
              width: "100%",
              backgroundColor: itemC.darkmode ? "#111" : "white",
            }}
          >
            {itemC.itempost.caption}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "15px",
              backgroundColor: "#333",
              width: "100%",
            }}
          >
            <div>
              {issaved ? (
                <svg
                  style={{ cursor: "pointer" }}
                  onClick={deletesaveitem}
                  aria-label="حذف"
                  class="x1lliihq x1n2onr6 x5n08af"
                  color="white"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>حذف</title>
                  <path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path>
                </svg>
              ) : (
                <svg
                  onClick={savehandler}
                  aria-label="ذخیره"
                  style={{ color: "white", cursor: "pointer" }}
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>ذخیره</title>
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              )}
            </div>

            <div style={{ display: "flex", color: "white" }}>
              <p style={{ direction: "rtl", paddingRight: "10px" }}>
                {isliked ? itemC.itempost.like + 1 : itemC.itempost.like} نفر
                پسندیدند{" "}
              </p>
              {isliked ? (
                <svg
                  style={{ cursor: "pointer" }}
                  onClick={removeLikeHandler}
                  aria-label="لغو پسندیدن"
                  class="x1lliihq x1n2onr6 xxk16z8"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <title>لغو پسندیدن</title>
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                </svg>
              ) : (
                <svg
                  aria-label="پسند"
                  style={{ color: "white", cursor: "pointer" }}
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                  onClick={likehandler}
                >
                  <title>پسند</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              )}
            </div>
          </div>

          <form
            onSubmit={addcommenthandler}
            className={
              itemC.darkmode ? "commentinputp6 darkmode111" : "commentinputp6"
            }
          >
            <div className="emojiicon">
              <EmojiEmotions
                style={{ cursor: "pointer" }}
                onClick={() => setemojiview(!emojiview)}
              />
            </div>
            {emojiview && (
              <div ref={ref} style={{ zIndex: 999 }}>
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  style={{
                    position: "absolute",
                    bottom: "-150px",
                    left: "10px",
                    width: "90%",
                    height: "400px",
                  }}
                  ref={ref}
                />
              </div>
            )}
            <input
              value={commentvalue}
              onChange={(e) => setcommentvalue(e.target.value)}
              placeholder="افزودن نظر..."
              type="text"
            />
            <div className="sendicon">
              <Send onClick={addcommenthandler} />
            </div>
          </form>

          {itemC.itempost.comment && (
            <div
              className={
                itemC.darkmode ? "commentcontent darkmode111" : "commentcontent"
              }
              style={{ width: "100%" }}
            >
              {itemC.itempost.comment
                ? itemC.itempost.comment.map((item) => {
                    return (
                      <div className="commentsingle">
                        <div>
                          {item.img ? (
                            <img
                              src="https://www.tarafdari.com/sites/default/files/styles/avatar/ts2/pictures/picture-258887-1563913842.jpg?itok=Lc3zziwI"
                              alt=""
                            />
                          ) : (
                            <img
                              src="https://placehold.co/600x400/orange/white?text=RG"
                              alt=""
                            />
                          )}
                        </div>
                        <div>
                          <p>{item.username}</p>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          )}

          <div className="hashtagc">
            <p style={{ display: "flex", alignItems: "center" }}>
              <FaPercentage style={{ paddingLeft: "5px" }} />
              هشتگ ها:
            </p>
            <p className="hashtagtext">{itemC.itempost.hashtag}</p>{" "}
          </div>
        </div>
      </div>
    </Modal>
  );
}
