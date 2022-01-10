import React from "react";
import ReactPlayer from 'react-player'

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 hidden>タイトル</h1>
        </div>
        <div className="body">
          <ReactPlayer 
            url='videos/youtube_videos.mp4'           
            playing
            width='100%'
            height='80%'
            controls="true"
          />
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;