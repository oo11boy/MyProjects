import { Box, Button, Modal } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ReactPhotoEditor } from "react-photo-editor";
import "react-photo-editor/dist/style.css";
import "./NewPost.css";
import { useDropzone } from "react-dropzone";
import { SocialPostContext } from "../../../ContextApi/P6Context/socialpostcontext";

export default function NewPost(props) {
  const { modal, setmodal } = props;
  const [file, setFile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [editedImageURL, setEditedImageURL] = useState(null);
  const [imageSaved, setImageSaved] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  };

  const handleSaveImage = (editedFile) => {
    setFile(editedFile);
    setEditedImageURL(URL.createObjectURL(editedFile));
    setShowModal(false);
    setImageSaved(true);
  };

  useEffect(() => {
    if (file && !imageSaved) {
      setShowModal(true);
    }
  }, [file, imageSaved]);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setImageSaved(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png, image/jpeg, image/jpg",
    onDrop,
  });
 const setpostuserC=useContext(SocialPostContext)
  const [textpost, settextpost] = useState("");
const [hashtags,sethashtags]=useState('')
  const handlerpublish = () => {
    if(editedImageURL==null || textpost=="" ){ return}
    setpostuserC.setpostsuser([
      ...setpostuserC.postsuser,
      {
        id: 1,
        userid: 22,
        img: editedImageURL,
        caption: textpost,
        hashtag:hashtags,
        like:0,
        comment:[],

      },
    ]);
    setEditedImageURL(null);
    settextpost("");
    setmodal(false);
  };

  return (
    <>
      <Modal
        onClose={() => setmodal(false)}
        open={modal}
        className="modalContainer"
      >
        <Box style={{border:"1px solid #ffffff30"}} className={setpostuserC.darkmode ?'modalContent darkmode222':"modalContent"}>
          <ReactPhotoEditor
            open={showModal}
            onClose={hideModal}
            file={file}
            onSaveImage={handleSaveImage}
          />

          {editedImageURL ? (
            <div {...getRootProps()} className="dropzone">
              <img src={editedImageURL} alt="Edited" />
            </div>
          ) : (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <p>عکس‌ را به اینجا بکشید</p>
              <button>انتخاب از رایانه</button>
            </div>
          )}

          <div className="Posttext">
            {useMemo(() => {
             
              return (
                <textarea
                className={setpostuserC.darkmode?"darkmode111":""}
                  onChange={(e) => settextpost(e.target.value)}
                  placeholder="توضیحات پست را بنویسید..."
                ></textarea>
              
              );
            }, [setpostuserC.postsuser])}
              <input type="text" onChange={(e)=>sethashtags(e.target.value)} name="" id="" placeholder="هشتگ ها را وارد کنید"/>
          </div>
          <div className="publish">
            <button onClick={handlerpublish}>انتشار پست</button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
