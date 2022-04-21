//forward ref concept example 2
import React, { forwardRef } from 'react'
import VIDEO from "./jingle-bells-video.mp4";

const Player = forwardRef((props, ref) => {
  return (
      <div>
          <video src={VIDEO} onClick={props.handlePlay} ref={ref}></video>
    </div>
  )
})

export default Player