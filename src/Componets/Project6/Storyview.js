
import Modal from '@mui/material/Modal';
import React, { useContext, useEffect, useState } from 'react'
import Stories from 'react-insta-stories';
import { SocialPostContext } from '../../ContextApi/P6Context/socialpostcontext';
export default function Storyview(props) {
   const {showstory}=props
    const storiesC=useContext(SocialPostContext)
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNextStory = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= storiesC.mystories.length ? 0 : nextIndex; // Loop back if at the end
      });
    };

    const handlePreviousStory = () => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex - 1;
        return nextIndex < 0 ? storiesC.mystories.length - 1 : nextIndex; // Loop back if at the beginning
      });
    };
    const [open, setOpen] = React.useState(true);

    useEffect(()=>{
        setOpen(true)
    }
    ,[showstory])
  const endstory=()=>{
      setOpen(false)
  }
  const handleClose = () => setOpen(false);
  return (
    <Modal
    open={open}
    className="modalp6"
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   
      <div className="mestory">
        
        <Stories
        
          stories={storiesC.mystories}
         height={"100vh"}
         width={"100%"}
         
          defaultInterval={10000}
          onAllStoriesEnd={endstory}
          currentIndex={currentIndex}
          onPrev={handlePreviousStory}
          onNext={handleNextStory}
          isPaused={true}
        />
      
      </div>
  </Modal>
  )
}
