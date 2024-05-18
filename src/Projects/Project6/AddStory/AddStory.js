import { Box, Button, Modal } from "@mui/material";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { ReactPhotoEditor } from "react-photo-editor";
import "react-photo-editor/dist/style.css";

import { useDropzone } from "react-dropzone";
import { SocialPostContext } from "../../../ContextApi/P6Context/socialpostcontext";

export default function AddStory(props) {
  const { modal, setmodal }= props
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

  const handlerpublish = () => {
    if(editedImageURL==null ){ return}
    setpostuserC.setmystories([...setpostuserC.mystories,{
      
        content: (props) => (
            <div style={{ backgroundImage:`url(${editedImageURL})`,backgroundSize:"cover", padding: 20,width:"100%",height:"100%" }}>

              {textpost &&
               <h1 style={{fontSize:"30px", marginTop: 50,backgroundColor:"black",color:"white",fontFamily:"vazir",textAlign:"center",borderRadius:"10px" ,padding:"20px"}}>{textpost}</h1>
              } 
            </div>
        )
    }])
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
                  placeholder="در صورتی که میخواهم روی عکس متنی نوشته شود آن متن را اینجا بنویسید..."
                ></textarea>
              );
            }, [setpostuserC.postsuser])}
          </div>
          <div className="publish">
            <button onClick={handlerpublish}>انتشار پست</button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
