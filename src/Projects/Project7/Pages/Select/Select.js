import React, { useState, useRef, useEffect } from "react";
import { listmusic } from "../../Db";
import "./Select.css";
import smoothScroll from "smooth-scroll-into-view-if-needed";

export default function Select(props) {
  const {
    setCreateStep,
    setselectisdone,
    highlightedText,
    setHighlightedText,
    setItemSelected,
  } = props;
  const [showchoose, setShowChoose] = useState(false);
  const [textmusic, setTextMusic] = useState("");
  const [highlightStatus, setHighlightStatus] = useState(false);

  const textChooseRef = useRef(null);

  const handleHighlight = (e) => {
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const selectedText = e.target.value.substring(selectionStart, selectionEnd);

    if (selectedText.length > 50) {
      const truncatedText = selectedText.substring(0, 50);
      setHighlightedText(truncatedText);
      e.target.setSelectionRange(selectionStart, selectionStart + 50);
    } else {
      setHighlightedText(selectedText);
    }
  };

  const chooseMusicHandler = (item) => {
    setTextMusic(item.text);
    setItemSelected(item);
  };

  useEffect(() => {
    textmusic && smoothScroll(textChooseRef.current);
  }, [textmusic]);

  const gotopreviewhandler = () => {
    setselectisdone(true);
    setCreateStep("preview");
  };

  return (
    <div className="selectmusic">
      <p className="selecttext">ابتدا موزیک مورد نظرتو انتخاب کن!</p>
      <div className="choosemusic">
        {listmusic.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setShowChoose(item.id)}
            onMouseLeave={() => setShowChoose(false)}
            style={{ backgroundImage: `url(${item.cover})` }}
            className="singlechoose"
          >
            {showchoose === item.id && (
              <div className="oncoverchoose">
                <p onClick={() => chooseMusicHandler(item)}>انتخاب موزیک</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {textmusic && (
        <div ref={textChooseRef}>
          {highlightStatus ? (
            <>
              <div className="textchoose">
                <p>متن انتخاب شده جهت چاپ بر روی تیشرت:</p>
                <div className="edithlight">
                  <p>{highlightedText}</p>
                  <div
                    onClick={() => setHighlightStatus(false)}
                    className="sethighlight"
                  >
                    ویرایش هایلایت
                  </div>
                </div>
              </div>
              <div onClick={gotopreviewhandler} className="tshirtview">
                پیش نمایش تیشرت
              </div>
            </>
          ) : (
            <div className="textchoose">
              <p>
                لطفا بخش مورد علاقه خود از متن آهنگ را هایلایت کنید . (حداکثر 50
                کاراکتر)
              </p>
              <textarea
                className=""
                name=""
                id=""
                cols="30"
                rows="10"
                value={textmusic}
                onChange={(e) => setTextMusic(e.target.value)}
                onSelect={handleHighlight}
              ></textarea>
              {highlightedText && (
                <div
                  onClick={() => setHighlightStatus(true)}
                  className="sethighlight"
                >
                  تایید هایلایت
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
