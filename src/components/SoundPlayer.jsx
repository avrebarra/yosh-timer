import React from 'react';
import sound from 'internals/sounds/1.mp3';


const SoundPlayer = (props) => {
  return (
    <audio className="SoundPlayer" autoPlay={true} loop={true} src={sound} >
      Your browser does not support the <code>audio</code> element.
    </audio>
  )
}

export default SoundPlayer;
